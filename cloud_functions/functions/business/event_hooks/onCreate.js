const functions = require('firebase-functions');

module.exports = functions.firestore
  .document("providers/{providerId}")
  .onCreate(onCreate);

function onCreate(snap, context) {
  const provider = snap.data();

  if (typeof(provider) !== 'object' || !provider.name) {
    return Promise.resolce();
  }
  const slug = getSlug(provider.name);
  return snap.ref.set({
    slug
  }, {merge: true});
}

function getSlug(name) {
  return name.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
