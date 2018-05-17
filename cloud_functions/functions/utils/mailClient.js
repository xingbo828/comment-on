const sgMail = require('@sendgrid/mail');
const functions = require('firebase-functions');

sgMail.setApiKey(functions.config().sendgrid.key);
sgMail.setSubstitutionWrappers('{{', '}}');

const buildMsg = (to, url) => {
  const msg = {
    to: to,
    from: 'noreply@ezypzy.io',
    subject: 'New project from EzyPzy',
    text: 'You have a new project!',
    html: '<p>You have a new project!</p>',
    templateId: '188aa486-1147-478a-a029-dcc3677da425',
    substitutions: {
      url
    },
  };
  return msg;
};

module.exports = {
  sendNewProviderEmail: (to, body, {url, name}) => {
    const msg = buildMsg(to, body, {url, name});
    return sgMail.send(msg);
  },
  sendNewProviderEmails: (receivers, projectId) => {
    const msgs = Object.keys(receivers).map( receiverId => {
      const receiver = receivers[receiverId];
      return buildMsg(receiver.email, `https://business-dev.ezypzy.ca/projects/${projectId}`);
    });
    return sgMail.send(msgs);
  }
};
