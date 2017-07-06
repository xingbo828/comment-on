import { combineReducers } from 'redux';
import auth from '../modules/Auth/authReducer';

const rootReducer = combineReducers({
  user: auth
});

export default rootReducer;