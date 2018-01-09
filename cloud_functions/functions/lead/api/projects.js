'use strict';

const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');

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

app.put('/:projectId/', (request, response) => {
  const body = request.body;
  const projectId = request.params.projectId;
  if (!body.action) {
    return response.status(400).json({error: 'missing action'});
  }
  switch(body.action) {
    case 'accept':
      return getProviderId(request)
      .then(providerId => {
        return handleAcceptLead(body, projectId, providerId, response);
      });
    case 'reject':
      return getProviderId(request)
      .then(providerId => {
        return handleRejectLead(body, projectId, providerId, response);
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
    return user.data().moverId;
  })
  .catch(()=> {
    return Promise.resolve('');
  });
};

const handleAcceptLead = (body, projectId, providerId, response) => {
  if (!providerId) {
    return response.status(400).json({error: 'invalid provider'});
  }
  if (body.estimatedPrice) {
    return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
      const data = doc.data();
      if (!data) {
        return Promise.reject('invalid project');
      }
      const receiver = data.receivers[providerId];
      if (!receiver) {
        return Promise.reject('invalid provider');
      }
      receiver.status = 'accept';
      receiver.estimatedPrice = body.estimatedPrice || null;
      return doc.ref.set(data);

    }).then(()=>{
      response.json({status: 'success'});
    }).catch((err) => {
      return response.status(400).json({error: err});
    });
  }
  return response.status(400).json({error: 'missing price'});
};
const handleRejectLead = (body, projectId, providerId, response) => {
  if (!providerId) {
    return response.status(400).json({error: 'invalid provider'});
  }
  return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
    const data = doc.data();
    if (!data) {
      return Promise.reject('invalid project');
    }
    const receiver = data.receivers[providerId];
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
