import { combineReducers } from 'redux-immutable';
import notificationCenter from './NotificationCenter/notificationCenterReducers';
import globalNav from './GlobalNav/GlobalNavReducer';

export default combineReducers({
  notificationCenter,
  globalNav
});
