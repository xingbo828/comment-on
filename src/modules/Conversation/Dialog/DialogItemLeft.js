import React from 'react';
import moment from 'moment';
import Avatar from '../../../globalComponents/Avatar';

import {
  DialogItemContainer,
  DislogItemContent,
  ContentWrapper,
  SenderName,
  MsgTime
} from './Styled';

const DialogItemLeft = ({msg}) => {
  const getTime = (timestamp) => {
    return moment(timestamp).calendar();
  };
  return (
    <DialogItemContainer>
        <Avatar src={msg.from.photoURL} />
        <ContentWrapper>
          <SenderName>{msg.from.displayName}</SenderName>
          <DislogItemContent>{msg.text}</DislogItemContent>
          {msg.timestamp && <MsgTime>{getTime(msg.timestamp)}</MsgTime>}
        </ContentWrapper>
      </DialogItemContainer>
  );
};

export default DialogItemLeft;
