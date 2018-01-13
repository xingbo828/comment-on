import React from 'react';
import {
  NotificationContentItemContainer,
  NotificationContentItemLink,
} from './Styled';

const NotificationContentItem = ({ message, onItemClick }) => {
  return (
    <NotificationContentItemContainer onClick={onItemClick}>
      <NotificationContentItemLink to={`/project/${message.project}`}>
        <strong>{message.from.displayName}</strong> from <strong>{message.provider.businessName}</strong> company has sent you a message.
      </NotificationContentItemLink>
    </NotificationContentItemContainer>
  );
};

export default NotificationContentItem;
