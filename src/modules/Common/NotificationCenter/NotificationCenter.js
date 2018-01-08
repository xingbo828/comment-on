import React from 'react';
import Icon from '../../../globalComponents/Icon';
import Badge from '../../../globalComponents/Badge';
import {
  NotificationCenterContainer,
  NotificationLink,
  NotificationLinkText
} from './Styled';

const NotificationCenter = ({ totalUnreadCount }) => {
  return (
    <NotificationCenterContainer>
      <Badge count={totalUnreadCount} offsetY={18} offsetX={5} scale={0.8}>
        <NotificationLink enabled={totalUnreadCount > 0}>
          <Icon icon="bell-o" size="lg" />
          <NotificationLinkText>Notifications</NotificationLinkText>
        </NotificationLink>
      </Badge>
    </NotificationCenterContainer>
  );
};

export default NotificationCenter;
