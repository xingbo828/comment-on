const functions = require('firebase-functions');
const constants = require('../constants');
const moment = require('moment');

module.exports = functions.database.ref("leads/{leadId}")
  .onCreate(event => {
    let lead = event.data.val();
    console.log('Lead:', event.params.leadId, lead);
    if (typeof(lead) !== 'object') {
      lead = {};
    }
    lead.lead_status = constants.lead_status.created;
    if (!lead.owner_id || !lead.configuration) {
      lead.lead_status = constants.lead_status.invalid;
    }
    lead.id = event.params.leadId;
    lead.creationTimestamp = moment.utc().unix();
    lead.updateTimestamp = moment.utc().unix();

    event.data.ref.set(lead);
  });
