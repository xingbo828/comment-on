import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import account from '../modules/Account/accountReducer';
import mover from '../modules/Mover/moverReducer';
import project from '../modules/Project/projectReducer';
import conversation from '../modules/Conversation/conversationReducer';
import common from '../modules/Common/commonReducer';
import configurations from '../modules/Common/Configurations/configurationReducers';

const rootReducer = combineReducers({
  common,
  account,
  mover,
  project,
  conversation,
  configurations,
  form
});

export default rootReducer;
