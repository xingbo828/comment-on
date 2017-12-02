import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import account from '../modules/Account/accountReducer';
import mover from '../modules/Mover/moverReducer';

const rootReducer = combineReducers({
  account,
  mover,
  form
});

export default rootReducer;
