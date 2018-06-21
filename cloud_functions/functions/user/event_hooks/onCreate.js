const functions = require('firebase-functions');
const admin = require('firebase-admin');

module.exports = functions.auth.user().onCreate(data => {
  const { uid, displayName, email, photoURL } = data;
  const userDocRef = admin.firestore().collection('users').doc(uid);
  return userDocRef.set({
    displayName,
    email,
    photoURL,
    providers: {},
    receiveEmail: true
  });
});
