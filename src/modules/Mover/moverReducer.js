import { combineReducers } from 'redux-immutable';
import configurations from './Configurations/configurationReducers';
import profile from './Profile/profileReducers';

export default combineReducers({
  configurations,
  profile
});

