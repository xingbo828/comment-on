import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { getConversationUnread } from '../../../../Common/NotificationCenter/notificationCenterReducers';
import Item from './Item';

const mapStateToProps = (state, ownProps) => {
  if(!ownProps.projectId || !ownProps.moverInfo.conversation) {
    return { unreadMsgsCount: 0 };
  };
  return {
    unreadMsgsCount: getConversationUnread(
      state,
      ownProps.projectId,
      ownProps.moverInfo.conversation.id
    )
  };
};

const enchance = compose(withRouter, connect(mapStateToProps));

export default enchance(Item);
