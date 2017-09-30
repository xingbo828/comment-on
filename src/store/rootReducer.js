import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import account from '../modules/Account/accountReducer';
import business from '../modules/Business/businessReducer';

const rootReducer = combineReducers({
  account,
  business,
  form
});

export default rootReducer;
