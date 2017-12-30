import { combineReducers } from 'redux-immutable';
import configurations from './Configurations/configurationReducers';
import management from './Management/managementReducer';

export default combineReducers({
  configurations,
  management
});
