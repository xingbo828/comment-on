import { combineReducers } from 'redux-immutable';

import account from '../modules/Account/accountReducer';

const rootReducer = combineReducers({
  account
});

export default rootReducer;
