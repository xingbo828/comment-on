import React from 'react';
import Icon from '../../../globalComponents/Icon';
import {
  ConversationHeaderCloseBtn
} from './Styled';

const ConversationHeader = ({
  closeConversation
}) => {
  return (
      <ConversationHeaderCloseBtn onClick={closeConversation}>
        <Icon icon="times" size="lg" />
      </ConversationHeaderCloseBtn>
  );
};

export default ConversationHeader;
