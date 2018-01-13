import React, { Component } from 'react';
import Icon from '../../../globalComponents/Icon';
import Badge from '../../../globalComponents/Badge';
import NotificationContent from './NotificationContent';
import {
  NotificationCenterContainer,
  NotificationClickWrapper,
  NotificationLinkText,
  NotificationIcon
} from './Styled';

class NotificationCenter extends Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.containerRef && !this.containerRef.contains(e.target)) {
      this.props.close();
    }
  }
  render() {
    const { totalUnreadCount, toggle, isOpen, close } = this.props;
    return (
      <NotificationCenterContainer innerRef={(el) => { this.containerRef = el; }} isOpen={isOpen} enabled={totalUnreadCount > 0}>
        <NotificationClickWrapper onClick={toggle}>
          <Badge count={totalUnreadCount} offsetY={25} offsetX={15}>
            <NotificationIcon><Icon icon="bell-o" size="2x" /></NotificationIcon>
            <NotificationLinkText>Notifications</NotificationLinkText>
          </Badge>
        </NotificationClickWrapper>
        {isOpen && <NotificationContent onItemClick={close} />}
      </NotificationCenterContainer>
    );
  }
};

export default NotificationCenter;
