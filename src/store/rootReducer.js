import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import account from '../modules/Account/accountReducer';

const rootReducer = combineReducers({
  account,
  form
});

export default rootReducer;
