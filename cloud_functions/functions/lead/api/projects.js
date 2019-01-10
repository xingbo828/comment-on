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
    console.error(err);
  } else {
    next();
  }
});

app.get('/', (request, response) => {
  const filterStartDate = request.query.filterStartDate;
  const filterEndDate = request.query.filterEndDate;
  return getProviderId(request)
    .then(userData =>
      admin.firestore().collection('providers').doc(userData.moverId).get().then(d => ({userData, provider: d.data()}))
    )
    .then(({ userData, provider: { projects } }) => {
      // console.log(projects)
      if (!projects) {
        return {userData, projects: [] }
      }
      return  Promise.all(Object.keys(projects).map(key => projects[key].get())).then(projects => ({userData, projects}))
      }
    )
    .then(({userData, projects}) => Promise.all(projects.map(p => processProject(p, userData))))
    .then(result => {
      if (filterStartDate && filterEndDate) {
        result = result.filter(project => {
          const date = project.receiver.date;
          if (!date) {
            return false;
          }
          return date >= new Date(filterStartDate) && date <= new Date(filterEndDate);
        });
      }
      response.json(result);
    })
    .catch(err => {
      console.error(err);
      response.status(500).send(err);
    });
});

const processProject = (projectRef, moverData) => {
  const data = projectRef.data();

  if (!data) {
    return Promise.reject('invalid project');
  }
  data.receiver = data.receivers[moverData.moverId];
  delete data.receivers;

  if (!data.receiver) {
    return Promise.reject('invalid provider');
  }
  data.receiver.provider = data.receiver.provider.id;
  const ownerId = data.owner;
  if (!ownerId) {
    data.owner = {
      displayName: data.configuration.contactInfo.name,
      email: data.configuration.contactInfo.email,
      phone: data.configuration.contactInfo.phoneNumber
    };
    return Promise.resolve(data);
  }
  return admin.firestore().collection('users').doc(ownerId).get()
    .then(ownerData => {
      ownerData = ownerData.data();
      data.owner = {
        displayName: ownerData.displayName
      };
      if (data.status === constants.project_status.completed) {
        if (data.receiver.status === constants.receiver_status.confirmed) {
          data.owner.email = ownerData.email;
          data.owner.phone = ownerData.phoneNumber;
        } else {
          data.status = constants.project_status.rejected;
        }
      }

      return data;
    }).catch(err => {
      return Promise.reject(err);
    });
};

app.get('/:projectId', (request, response) => {
  const projectId = request.params.projectId;
  return getProviderId(request)
    .then(userData => {
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
        return processProject(doc, userData);
      }).then((data)=>{
        response.json(data);
      }).catch((err) => {
        console.error(err);
        return response.status(400).json({error: err.message || err});
      });
    });
});

app.patch('/:projectId', (request, response) => {
  const projectId = request.params.projectId;
  const body = request.body;
  if (!body || Object.keys(body).length === 0) {
    console.log("body", body);
    return response.status(400).json({error: 'empty payload'});
  }

  return getProviderId(request)
    .then(data => {

      const providerId = data.moverId;
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {

        const project = doc.data();
        const receiver = project.receivers[providerId];
        if (!receiver) {
          return Promise.reject('invalid provider');
        }
        Object.keys(body).forEach(key => {
          if (body[key] === null) {
            delete receiver[key];
            return;
          }
          if (key === 'date') {
            receiver[key] = new Date(value);
            return;
          }
          receiver[key] = value;
        });
        return doc.ref.set(project)
          .then(() => {
            return data;
          });
      });
    })
    .then((userData) => {
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
        return processProject(doc, userData);
      })
    })
    .then((project) => {
      return response.json(project);
    })
    .catch((error)=>{
      console.log(error);
      return response.status(400).json({});
    });
});

app.patch('/:projectId/date', (request, response) => {
  const projectId = request.params.projectId;
  const body = request.body;
  if (!body.date) {
    console.log("body", body);
    return response.status(400).json({error: 'empty payload'});
  }

  return getProviderId(request)
    .then(data => {

      const providerId = data.moverId;
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {

        const project = doc.data();
        const receiver = project.receivers[providerId];
        if (!receiver) {
          return Promise.reject('invalid provider');
        }
        receiver.date = new Date(body.date);
        return doc.ref.set(project)
          .then(() => {
            return data;
          });
      });
    })
    .then((userData) => {
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
        return processProject(doc, userData);
      })
    })
    .then((project) => {
      return response.json(project);
    })
    .catch((error)=>{
      console.log(error);
      return response.status(400).json({});
    });
});

app.patch('/:projectId/notes', (request, response) => {
  const projectId = request.params.projectId;
  const body = request.body;
  if (!body.notes) {
    console.log("body", body);
    return response.status(400).json({error: 'empty payload'});
  }

  return getProviderId(request)
    .then(data => {

      const providerId = data.moverId;
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {

        const project = doc.data();
        const receiver = project.receivers[providerId];
        if (!receiver) {
          return Promise.reject('invalid provider');
        }
        receiver.notes = body.notes;
        return doc.ref.set(project)
          .then(() => {
            return data;
          });
      });
    })
    .then((userData) => {
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
        return processProject(doc, userData);
      })
    })
    .then((project) => {
      return response.json(project);
    })
    .catch((error)=>{
      console.log(error);
      return response.status(400).json({});
    });
});

app.patch('/:projectId/status', (request, response) => {
  const projectId = request.params.projectId;
  const body = request.body;
  if (!body.status) {
    console.log(body);
    return response.status(400).json({error: 'empty payload'});
  }
  return getProviderId(request)
    .then(data => {
      const providerId = data.moverId;
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
        const project = doc.data();
        const receiver = project.receivers[providerId];
        if (!receiver) {
          return Promise.reject('invalid provider');
        }
        receiver.status = body.status;
        return doc.ref.set(project)
          .then(() => {
            return data;
          });
      });
    })
    .then((userData) => {
      return admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
        return processProject(doc, userData);
      })
    })
    .then((project) => {
      return response.json(project);
    })
    .catch((error)=>{
      console.log(error);
      return response.status(400).json({});
    });
});

app.put('/:projectId/', (request, response) => {
  const body = request.body;
  const projectId = request.params.projectId;
  if (!body.action) {
    console.error({error: projectId + ': missing action'});
    return response.status(400).json({error: 'missing action'});
  }
  switch(body.action) {
  case 'accept':
    return getProviderId(request)
      .then( data => {
        return handleAcceptLead(body, projectId, data, response);
      }).catch(err => {
        console.error(err);
        return response.status(400).json({err});
      });
  case 'reject':
    return getProviderId(request)
      .then(data => {
        return handleRejectLead(body, projectId, data, response);
      }).catch(err => {
        console.error(err);
        return response.status(400).json({err});
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

  if(!idToken || !request.headers.provider) {
    return Promise.resolve('');
  }
  return admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      return admin.firestore().collection('users').doc(uid).get();
    })
    // TODO: check if provider belongs to user
    .then((user) => {
      return {
        moverId: request.headers.provider,
        userId: user.id
      };
    })
    .catch((error)=> {
      return Promise.reject(error);
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
      receiver.conversation = convoDoc;

      if (body.notes) {
        admin.firestore().collection('messages').add({
          conversation: convoDoc,
          from: admin.firestore().collection('users').doc(uid),
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
      return response.status(400).json({error: err.toString(), stack: err.stack});
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
