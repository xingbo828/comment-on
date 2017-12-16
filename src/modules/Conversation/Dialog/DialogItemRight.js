import React from 'react';
import moment from 'moment';
import Avatar from '../../../globalComponents/Avatar';

import {
  DialogItemRightContainer,
  DislogItemRightContent,
  ContentWrapper,
  SenderName,
  MsgTime
} from './Styled';

const DialogItemRight = ({msg}) => {
  const getTime = (timestamp) => {
    if(!timestamp) {
      return 'Now';
    }
    return moment(timestamp).calendar();
  };
  return (
    <DialogItemRightContainer>
        <Avatar src={msg.from.photoURL} />
        <ContentWrapper>
          <SenderName>Me</SenderName>
          <DislogItemRightContent>{msg.text}</DislogItemRightContent>
          <MsgTime>{getTime(msg.timestamp)}</MsgTime>
        </ContentWrapper>
      </DialogItemRightContainer>
  );
};

export default DialogItemRight;
