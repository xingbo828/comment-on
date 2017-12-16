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
  return (
    <DialogItemRightContainer>
        <Avatar src={msg.from.photoURL} />
        <ContentWrapper>
          <SenderName>Me</SenderName>
          <DislogItemRightContent>{msg.text}</DislogItemRightContent>
          <MsgTime>{moment().calendar(msg.timestamp)}</MsgTime>
        </ContentWrapper>
      </DialogItemRightContainer>
  );
};

export default DialogItemRight;
