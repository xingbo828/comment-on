const sgMail = require('@sendgrid/mail');
const functions = require('firebase-functions');

sgMail.setApiKey(functions.config().sendgrid.key);
sgMail.setSubstitutionWrappers('{{', '}}');

const buildMsg = (to, url) => {
  const msg = {
    to,
    from: 'noreply@inneed.ca',
    subject: 'New project available from In Need',
    text: 'You have a new project!',
    html: '<p>You have a new project!</p>',
    templateId: 'ee98176e-dd85-4ed1-9481-70b23d90e9cb',
    substitutions: {
      url
    },
  };
  return msg;
};

module.exports = {
  sendNewProviderEmail: (to, url) => {
    const msg = buildMsg(to, url);
    return sgMail.send(msg);
  },
  sendLeadNotification: (to, info) => {
    const msg = {
      to,
      from: 'noreply@inneed.ca',
      subject: 'Your moving request has been sent to mover',
      text: 'Mover will contact you shortly.',
      html: '<p>Mover will contact you shortly.</p>',
      templateId: '22002495-c69a-4fe8-95a6-e49e44348241'
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