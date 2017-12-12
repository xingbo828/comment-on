const functions = require('firebase-functions');
const constants = require('../constants');
const moment = require('moment');

module.exports = functions.firestore
  .document("projects/{projectId}")
  .onCreate(event => {
    let lead = event.data.data();
    console.log('Lead:', event.params.projectId, lead);
    if (typeof(lead) !== 'object') {
      lead = {};
    }
    lead.lead_status = constants.lead_status.created;
    if (!lead.owner || !lead.configuration) {
      lead.lead_status = constants.lead_status.invalid;
    }
    lead.id = event.params.projectId;
    lead.creationTimestamp = moment.utc().unix();
    lead.updateTimestamp = moment.utc().unix();

    return event.data.ref.set(lead);
  });
