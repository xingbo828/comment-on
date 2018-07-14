const functions = require('firebase-functions');
const constants = require('../constants');
const admin = require('firebase-admin');
const {sendNewProviderEmails} = require('../../utils/mailClient');

const handleDirectProject = (lead, snap, context) => {
  if (!lead.configuration || !lead.providerId) {
    lead.status = constants.project_status.invalid;
  }
  lead.id = context.params.projectId;
  lead.creationTimestamp = admin.firestore.FieldValue.serverTimestamp();
  lead.updateTimestamp = admin.firestore.FieldValue.serverTimestamp();

  const projectRef = snap.ref;
  const projectUpdateKey = `projects.${projectRef.id}`;
  let updateObj = {};
  updateObj[projectUpdateKey] = projectRef;
  const batch = snap.ref.firestore.batch();

  const providerRef = admin.firestore().collection('providers').doc(lead.providerId);
  return providerRef.get()
    .then(provider => {
      return provider.data();
    })
    .then(data => {
      batch.update(providerRef, updateObj);
      lead.receivers = {};
      lead.receivers[providerRef.id] = {
        status: constants.receiver_status.sent,
        provider: providerRef,
        exist: true,
        email: data.email || 'invalid@invalid.in'
      };
      batch.set(projectRef, lead);
      return sendNewProviderEmails(lead.receivers, lead.id);
    }).then(() => {
      return batch.commit();
    }).catch(err => {
      console.error('error:', err);
      return;
    });
};

const handleIndirectProject = (lead, snap, context) => {
  if (!lead.owner || !lead.configuration) {
    lead.status = constants.project_status.invalid;
  }
  lead.id = context.params.projectId;
  lead.creationTimestamp = admin.firestore.FieldValue.serverTimestamp();
  lead.updateTimestamp = admin.firestore.FieldValue.serverTimestamp();

  const batch = snap.ref.firestore.batch();
  return getProviders(lead.configuration, snap.ref, batch)
    .then((providerRefPaths) => {
      lead.receivers = {};

      providerRefPaths.forEach((doc) => {
        const data = doc.data();
        lead.receivers[doc.ref.id] = {
          status: constants.receiver_status.sent,
          provider: doc.ref,
          exist: true,
          email: data.email || 'invalid@invalid.in'
        };
      });
      batch.set(snap.ref, lead);
      return sendNewProviderEmails(lead.receivers, lead.id)
        .then(() => {
          return batch.commit();
        }).catch((err) => {
          console.log(err);
        });
    })
    .then(()=>{
      console.log('success');
    }).catch((e)=>{
      console.error('error: ', e);
    });
}

module.exports = functions.firestore
  .document("projects/{projectId}")
  .onCreate((snap, context) => {
    let lead = snap.data();
    console.log('Lead:', context.params.projectId, lead);
    if (typeof(lead) !== 'object') {
      lead = {};
    }
    lead.status = constants.project_status.created;
    switch (lead.type) {
    case constants.project_type.direct:
      return handleDirectProject(lead, snap, context);
    case constants.project_type.indirect:
      return handleIndirectProject(lead, snap, context);
    }
  });

const getProviders = (configuration, projectRef, batch) => {
  return admin.firestore().collection('providers').get().then((querySnapshot) => {
    let result = [];
    const projectUpdateKey = `projects.${projectRef.id}`;
    let updateObj = {};
    updateObj[projectUpdateKey] = projectRef;
    querySnapshot.forEach((doc)=>{
      result.push(doc);
      batch.update(doc.ref, updateObj);
    });
    return result;
  });
};
