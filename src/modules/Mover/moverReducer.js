import { combineReducers } from 'redux-immutable';
import configurations from './Configurations/configurationReducers';
import profile from './Profile/profileReducers';
import project from './Project/projectReducers';

export default combineReducers({
  configurations,
  profile,
  project
});

