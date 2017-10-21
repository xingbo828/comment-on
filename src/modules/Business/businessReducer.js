import { combineReducers } from 'redux-immutable';
import search from './Search/searchReducers';
import profile from './Profile/profileReducers';

export default combineReducers({
  search,
  profile
});

