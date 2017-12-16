import React from 'react';
import Icon from '../../../globalComponents/Icon';
import {
  ConversationHeaderContainer,
  ConversationHeaderCloseBtn
} from './Styled';

const ConversationHeader = ({
  closeConversation
}) => {
  return (
    <ConversationHeaderContainer>
      <ConversationHeaderCloseBtn onClick={closeConversation}>
        <Icon icon="times" size="lg" />
      </ConversationHeaderCloseBtn>
    </ConversationHeaderContainer>
  );
};

export default ConversationHeader;
