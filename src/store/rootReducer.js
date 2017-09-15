import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import account from '../modules/Account/accountReducer';
import business from '../modules/Business/businessReducer';

const rootReducer = combineReducers({
  account,
  business,
  form
});

console.log(rootReducer);

export default rootReducer;
