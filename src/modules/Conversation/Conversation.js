import React, { Component } from 'react';
import Dialog from './Dialog';
import ConversationForm from './ConversationForm';
import { ConversationContainer } from './Styled';

class Conversation extends Component {
  render() {
    const { match } = this.props;
    return (
      <ConversationContainer >
        <Dialog scrollToBottom={this.scrollToBottom}/>
        <ConversationForm conversationId={match.params.conversationId} />
      </ConversationContainer>
    );
  }
};

export default Conversation;
