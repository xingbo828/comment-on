const functions = require('firebase-functions');
const constants = require('../constants');
const admin = require('firebase-admin');


module.exports = functions.firestore
  .document("projects/{projectId}")
  .onCreate(event => {
    let lead = event.data.data();
    console.log('Lead:', event.params.projectId, lead);
    if (typeof(lead) !== 'object') {
      lead = {};
    }
    lead.status = constants.project_status.created;
    if (!lead.owner || !lead.configuration) {
      lead.status = constants.project_status.invalid;
    }
    lead.id = event.params.projectId;
    lead.creationTimestamp = admin.firestore.FieldValue.serverTimestamp();
    lead.updateTimestamp = admin.firestore.FieldValue.serverTimestamp();

    const batch = event.data.ref.firestore.batch();
    return getProviders(lead.configuration, event.data.ref, batch)
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
        batch.set(event.data.ref, lead);
        return batch.commit();
      })
      .then(()=>{
        console.log('success');
      }).catch((e)=>{
        console.log('error: ', e);
      });
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
