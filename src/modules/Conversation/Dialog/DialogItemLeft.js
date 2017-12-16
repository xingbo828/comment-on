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
  return (
    <DialogItemContainer>
        <Avatar src={msg.from.photoURL} />
        <ContentWrapper>
          <SenderName>{msg.from.displayName}</SenderName>
          <DislogItemContent>{msg.text}</DislogItemContent>
          <MsgTime>{moment().calendar(msg.timestamp)}</MsgTime>
        </ContentWrapper>
      </DialogItemContainer>
  );
};

export default DialogItemLeft;
