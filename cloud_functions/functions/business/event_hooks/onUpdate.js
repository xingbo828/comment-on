const functions = require('firebase-functions');

module.exports = functions.firestore
  .document("providers/{providerId}")
  .onUpdate(onUpdate);

function onUpdate(change, context) {
  const provider = change.after.data();
  console.log('Provider:', provider);

  if (typeof(provider) !== 'object' || !provider.name || provider.slug) {
    console.log('Already updated');
    return Promise.resolve();
  }
  const slug = getSlug(provider.name);
  const configurations = [
    'Address',
    'Date',
    'Items',
    'ContactInfo',
    'Overview'
  ];
  const type = 'Move';
  return change.after.ref.set({
    configurations,
    slug,
    type
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
