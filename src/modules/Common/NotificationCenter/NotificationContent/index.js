import { connect } from 'react-redux';
import {
  compose,
  setDisplayName
} from 'recompose';
import mapImmutablePropsToPlainProps from '../../mapImmutablePropsToPlainProps';

import NotificationCenterContent from './NotificationContent';

import { getUnreadMsgs } from '../notificationCenterReducers';

const mapStateToProps = state => ({
  unreadMsgs: getUnreadMsgs(state)
});


const enhance = compose(
  connect(mapStateToProps),
  mapImmutablePropsToPlainProps,
  setDisplayName('NotificationCenterContent')
);

export default enhance(NotificationCenterContent);
