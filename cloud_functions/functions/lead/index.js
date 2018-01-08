'use strict';

module.exports.leadCreationFirestoreHook = require('./event_hooks/onCreate');
module.exports.leadUpdateHook = require('./event_hooks/onUpdate');

module.exports = (app) => {
  return {
    leadCreationFirestoreHook: require('./event_hooks/onCreate'),
    leadUpdateHook: require('./event_hooks/onUpdate'),
    leadApi: require('./api/lead')(app)
  };
};
