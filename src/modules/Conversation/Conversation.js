import React, { Component } from 'react';
import ConversationHeader from './ConversationHeader';
import Dialog from './Dialog';
import ConversationForm from './ConversationForm';
import { ConversationContainer } from './Styled';

class Conversation extends Component {
  render() {
    const { match, conversation, user } = this.props;
    return (
      <ConversationContainer >
        <ConversationHeader />
        <Dialog myUid={user.uid} conversation={conversation} scrollToBottom={this.scrollToBottom}/>
        <ConversationForm conversationId={match.params.conversationId} />
      </ConversationContainer>
    );
  }
};

export default Conversation;
