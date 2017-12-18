
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import isNull from 'lodash/isNull';

import { subscribeToMessages } from './conversationAction';
import { getConversation } from './conversationReducer';
import mapImmutablePropsToPlainProps from '../Common/mapImmutablePropsToPlainProps';
import Conversation from './Conversation';


const mapStateToProps = state => ({
  conversation: getConversation(state)
});

const mapDispatchToProps = (dispatch) => ({
  subscribeToMessages: (conversationId) => dispatch(subscribeToMessages(conversationId))
});


const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const isVisible = nextProps.conversation.get('visible');
      document.body.classList.toggle('is-locked', isVisible);

      const newConversationId = nextProps.conversation.get('conversationId');
      const currentConversationId = this.props.conversation.get('conversationId');
      if (
        !isNull(newConversationId) &&
        (newConversationId !== currentConversationId)
      ) {
        this.props.subscribeToMessages(newConversationId);
      }

    }
  }),
  mapImmutablePropsToPlainProps
);

export default enhance(Conversation);
