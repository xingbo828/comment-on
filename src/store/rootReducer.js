import { combineReducers } from 'redux-immutable';

import auth from '../modules/Auth/authReducer';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
