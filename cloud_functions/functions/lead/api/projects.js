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

app.put('/:projectId/providers/:providerId', (request, response) => {
  const body = request.body;
  const projectId = request.params.projectId;
  const providerId = request.params.providerId;
  if (!body.action) {
    return response.status(400).json({error: 'missing action'});
  }
  switch(body.action) {
    case 'accept':
      return handleAcceptLead(body, projectId, providerId, response);
    case 'reject':
      return handleRejectLead(body, projectId, providerId, response);
  }
  return response.json(request.body);
});

const handleAcceptLead = (body, projectId, providerId, response) => {
  if (body.estimatedPrice) {
    admin.firestore().collection('projects').doc(projectId).get.then((doc) => {
      const data = doc.data();
      if (data) {
        const receiver = data.receivers[providerId];
        receiver.status = 'accept';
        receiver.estimatedPrice = body.estimatedPrice;
      }
      return doc.ref.update({receivers: data.receivers});

    }).then(()=>{
      response.json({status: 'success'});
    });
  }
  return response.status(400).json({error: 'missing price'});
};
const handleRejectLead = (body, projectId, providerId, response) => {
  admin.firestore().collection('projects').doc(projectId).get().then((doc) => {
    const data = doc.data();
    if (data) {
      const receiver = data.receivers[providerId];
      receiver.status = 'reject';
    }
    console.log(data);
    return doc.ref.set(data);
  }).then(()=>{
    response.json({status: 'success'});
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = functions.https.onRequest(app);
