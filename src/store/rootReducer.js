import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import account from '../modules/Account/accountReducer';
import mover from '../modules/Mover/moverReducer';
import project from '../modules/Project/projectReducer';

const rootReducer = combineReducers({
  account,
  mover,
  project,
  form
});

export default rootReducer;
