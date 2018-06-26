import { combineReducers } from 'redux-immutable';
import management from './Management/managementReducer';
import overview from './Overview/overviewReducer';

export default combineReducers({
  overview,
  management
});
