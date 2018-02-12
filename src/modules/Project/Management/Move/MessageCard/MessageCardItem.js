import React from 'react';

import Badge from '../../../../../globalComponents/Badge';
import { MessageCardItemContainer, MessageCardItemName, MessageCardItemLink } from './Styled';

const MessageCardItem = ({ receiver }) => {
  return (
    <MessageCardItemContainer>
      <MessageCardItemLink to={`/conversation/${receiver.conversation.id}`}>
        <Badge scale={.85} offsetX={15} offsetY={5} count={receiver.unreadMsgCount}>
          <MessageCardItemName>
            {receiver.businessName}
          </MessageCardItemName>
        </Badge>
      </MessageCardItemLink>
    </MessageCardItemContainer>
  );
};

export default MessageCardItem;
