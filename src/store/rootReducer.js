import { combineReducers } from 'redux-immutable';
import login from '../modules/Auth/loginReducer';

const rootReducer = combineReducers({
  user: login
});

export default rootReducer;
