import React from 'react';
import Dialog from './Dialog';
import ConversationForm from './ConversationForm';
import ConversationHeader from './ConversationHeader';
import { ConversationContainer } from './Styled';

const Conversation = ({ conversation: { visible, conversationId } }) => {
  return (
    <ConversationContainer visible={visible}>
      <ConversationHeader />
      <Dialog />
      <ConversationForm conversationId={conversationId} />
    </ConversationContainer>
  );
};

export default Conversation;
