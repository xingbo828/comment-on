import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import account from '../modules/Account/accountReducer';

const rootReducer = combineReducers({
  account,
  form: formReducer
});

export default rootReducer;
