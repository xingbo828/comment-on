const functions = require('firebase-functions');
const admin = require('firebase-admin');

module.exports = functions.auth.user().onCreate(event => {
  const { uid, displayName, email, photoURL } = event.data;
  const userDocRef = admin.firestore().collection('users').doc(uid);
  return userDocRef.set({
    displayName,
    email,
    photoURL,
    receiveEmail: true
  });
});
