import React from 'react';
import Icon from '../../../globalComponents/Icon';
import Badge from '../../../globalComponents/Badge';

import {
  NotificationCenterContainer,
  NotificationLinkText,
  NotificationIcon,
  NotificationContentContainer
} from './Styled';

const NotificationCenter = ({ totalUnreadCount, toggle, isOpen }) => {
  return (
    <NotificationCenterContainer  isOpen={isOpen} enabled={totalUnreadCount > 0}>
      <Badge count={totalUnreadCount} offsetY={25} offsetX={15}>
        <NotificationIcon onClick={toggle}><Icon icon="bell-o" size="2x" /></NotificationIcon>
        <NotificationLinkText onClick={toggle}>Notifications</NotificationLinkText>
      </Badge>
      {isOpen && <NotificationContentContainer>
      test
      </NotificationContentContainer>}
    </NotificationCenterContainer>
  );
};

export default NotificationCenter;
