import { combineReducers } from 'redux-immutable';

import profile from './Profile/profileReducers';
import project from './Project/projectReducers';

export default combineReducers({
  profile,
  project
});

