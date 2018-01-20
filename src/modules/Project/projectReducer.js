import { combineReducers } from 'redux-immutable';
import configurations from './Configurations/configurationReducers';
import management from './Management/managementReducer';
import overview from './Overview/overviewReducer';

export default combineReducers({
  configurations,
  overview,
  management
});
