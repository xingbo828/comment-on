const sgMail = require('@sendgrid/mail');
const functions = require('firebase-functions');
const _ = require('lodash');

// sgMail.setApiKey(functions.config().sendgrid.key);
sgMail.setSubstitutionWrappers('{{', '}}');

const buildMsg = (to, url) => {
  const msg = {
    to,
    from: 'InNeed<noreply@inneed.ca>',
    subject: 'You Received a New Lead',
    text: 'You have a new lead available with In Need.',
    html: `
      <p>Good news! You have a new lead available from In Need.</p>
      <p>
        View the full details <strong><a style="color: rgb(34, 138, 230); text-decoration: none;" href="${url}">here</a>.</strong>
      </p>
    `,
    templateId: '14b9145f-dfad-460d-b7da-f4523bdf65e6',
  };
  return msg;
};

module.exports = {
  sendNewProviderEmail: (to, url) => {
    const msg = buildMsg(to, url);
    return sgMail.send(msg);
  },
  sendLeadNotification: ({ provider, lead }) => {
    const to = _.get(lead, 'configuration.contactInfo.email')
    const msg = {
      to,
      from: 'InNeed<noreply@inneed.ca>',
      subject: 'Your Request Has Been Sent',
      text: `${provider.name}  will contact you shortly.`,
      html: `
        <p>Good news. Your request has been sent.</p>
        <p>${provider.name} will contact you shortly.</p>
        <p>Thank you!</p>
      `,
      templateId: '83e18289-8e28-4fde-b7b7-c0e4322b700e'
    };
    return sgMail.send(msg);
  },
  sendNewProviderEmails: (receivers, projectId) => {
    const msgs = Object.keys(receivers).map( receiverId => {
      const receiver = receivers[receiverId];
      return buildMsg(receiver.email, `https://business.inneed.ca/projects/${projectId}`);
    });
    return sgMail.send(msgs);
  }
};
