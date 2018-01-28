'use strict';

const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const constants = require('../constants');

const app = express();

app.use(cors);
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).send('Invalid Request data');
  } else {
    next();
  }
});

app.get('/:projectId', (request, response) => {
  const projectId = request.params.projectId;
  return getProviderId(request)
  .then(userData => {
    return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
      const data = doc.data();
      if (!data) {
        return Promise.reject('invalid project');
      }
      data.receiver = data.receivers[userData.moverId];
      delete data.receivers;

      if (!data.receiver) {
        return Promise.reject('invalid provider');
      }
      data.receiver.provider = data.receiver.provider.id;
      const ownerId = data.owner;
      return admin.firestore().collection('users').doc(ownerId).get()
      .then(ownerData => {
        ownerData = ownerData.data();
        data.owner = {
          displayName: ownerData.displayName
        };
        if (data.status === constants.project_status.completed) {
          if (data.receiver.status === constants.receiver_status.confirmed) {
            data.owner.email = ownerData.email;
            data.owner.phone = ownerData.phone;
          } else {
            data.status = constants.project_status.rejected;
          }
        }

        return data;
      });
    }).then((data)=>{
      response.json(data);
    }).catch((err) => {
      return response.status(400).json({error: err.message || err});
    });
  });
});

app.put('/:projectId/', (request, response) => {
  const body = request.body;
  const projectId = request.params.projectId;
  if (!body.action) {
    return response.status(400).json({error: 'missing action'});
  }
  switch(body.action) {
    case 'accept':
      return getProviderId(request)
      .then( data => {
        return handleAcceptLead(body, projectId, data, response);
      });
    case 'reject':
      return getProviderId(request)
      .then(data => {
        return handleRejectLead(body, projectId, data, response);
      });
  }
  return response.json(request.body);
});

const getProviderId = (request) =>{
  let idToken;
  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    idToken = request.headers.authorization.split('Bearer ')[1];
  } else {
    // Read the ID Token from cookie.
    idToken = request.cookies && request.cookies.__session;
  }
  if(!idToken) {
    return Promise.resolve('');
  }
  return admin.auth().verifyIdToken(idToken)
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    return admin.firestore().collection('users').doc(uid).get();
  })
  .then((user) => {
    return {
      moverId: user.data().moverId,
      userId: user.id
    };
  })
  .catch((error)=> {
    console.log(error);
    return Promise.resolve('');
  });
};

const handleAcceptLead = (body, projectId, userData, response) => {
  if (!userData.moverId) {
    return response.status(400).json({error: 'invalid provider'});
  }
  if (body.estimatedPrice) {
    return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
      const data = doc.data();
      const uid = userData.userId;
      const providerId = userData.moverId;
      if (!data) {
        return Promise.reject('invalid project');
      }
      const receiver = data.receivers[providerId];
      if (!receiver) {
        return Promise.reject('invalid provider');
      }
      receiver.status = 'accept';
      receiver.estimatedPrice = body.estimatedPrice || null;
      const convoDoc = admin.firestore().collection('conversations').doc();
      convoDoc.set({
        project: doc.ref
      });
      receiver.conversation = convoDoc.ref;

      if (body.notes) {
        admin.firestore().collection('messages').add({
          conversation: convoDoc.ref,
          from: admin.firestore().collection('users').doc(uid).ref,
          status: constants.message_status.unread,
          text: body.notes,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          type: constants.message_type.text
        });
      }
      return doc.ref.set(data);

    }).then(()=>{
      response.json({status: 'success'});
    }).catch((err) => {
      return response.status(400).json({error: err.toString()});
    });
  }
  return response.status(400).json({error: 'missing price'});
};
const handleRejectLead = (body, projectId, userData, response) => {
  if (!userData.moverId) {
    return response.status(400).json({error: 'invalid provider'});
  }
  return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
    const data = doc.data();
    if (!data) {
      return Promise.reject('invalid project');
    }
    const receiver = data.receivers[userData.moverId];
    if (!receiver) {
      return Promise.reject('invalid provider');
    }
    receiver.status = 'reject';
    return doc.ref.set(data);
  }).then(()=>{
    response.json({status: 'success'});
  }).catch((err) => {
    return response.status(400).json({error: err});
  });
};

module.exports = functions.https.onRequest(app);
