import React from 'react';
import { connect } from 'react-redux';
import {
  openConversation
} from './conversationAction';

const ChatTester = ({openConversation}) => {
  const openChat = () => {
    openConversation('test');
  };

  return (
    <button onClick={openChat}>
      Let's chat
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openConversation: (conversationId) => dispatch(openConversation(conversationId))
});

export default connect(null, mapDispatchToProps)(ChatTester);
