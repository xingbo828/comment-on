'use strict';

module.exports = () => {
  return {
    leadCreationFirestoreHook: require('./event_hooks/onCreate'),
    leadUpdateHook: require('./event_hooks/onUpdate'),
    projects: require('./api/projects')
  };
};
