import { compose, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import {
  getProjectUnreadCount,
  getConversationUnread
} from '../../../../Common/NotificationCenter/notificationCenterReducers';
import MessageCard from './MessageCard';


const retrieveUnreadMsgCountPerConvo = (state, projectId, conversation) => {
  if(!projectId || !conversation) {
    return 0;
  };
  return getConversationUnread(
      state,
      projectId,
      conversation.id
    );
};

const mapStateToProps = (state, ownProps) => ({
  projectUnread: getProjectUnreadCount(state, ownProps.projectId),
  receivers: ownProps.receivers.map(r => ({
      id: r.provider.id,
      name: r.provider.name,
      conversation: r.conversation,
      unreadMsgCount: retrieveUnreadMsgCountPerConvo(state, ownProps.projectId, r.conversation)
  }))
});

const hasNoAcceptedReceiver = props => props.receivers.length === 0;

const enhance = compose(
  branch(hasNoAcceptedReceiver, renderNothing),
  connect(mapStateToProps)
);

export default enhance(MessageCard);
