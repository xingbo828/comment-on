import React from 'react';
import {
  NotificationContentItemContainer,
  NotificationContentItemLink,
} from './Styled';

const NotificationContentItem = ({ message, onItemClick }) => {
  return (
    <NotificationContentItemContainer onClick={onItemClick}>
      <NotificationContentItemLink to={`/projects/${message.project}`}>
        <strong>{message.from.displayName}</strong> from company <strong>{message.provider.name}</strong> has sent you a message.
      </NotificationContentItemLink>
    </NotificationContentItemContainer>
  );
};

export default NotificationContentItem;
