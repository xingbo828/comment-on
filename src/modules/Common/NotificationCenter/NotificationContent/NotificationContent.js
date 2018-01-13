import React from 'react';
import {
  NotificationContentContainer
} from './Styled';
import NotificationContentItem from './NotificationContentItem';

const NotificationContent = ({ unreadMsgs, onItemClick }) => (
  <NotificationContentContainer>
    {
      unreadMsgs.length > 0 ? unreadMsgs.map(m => <NotificationContentItem onItemClick={onItemClick} key={m.id} message={m} />) :
      <span>Nothing to see here</span>
    }
  </NotificationContentContainer>
);

export default NotificationContent;
