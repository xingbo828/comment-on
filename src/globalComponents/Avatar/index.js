import React from 'react';
import Icon from '../Icon';
import { string } from 'prop-types';
import {
  AvatarContainer,
  AvatarImg
} from './Styles';

const Avatar = ({src, icon, size, iconSize,...rest}) => {
  const renderAvatar = ({ src, icon, size }) => {
    if(src) {
      return <AvatarImg src={src} size={size}/>;
    } else if(icon) {
      return <Icon size={iconSize} icon={icon} />;
    } else {
      return <Icon size="lg" icon="user"/>;
    }
  };

  return (
    <AvatarContainer {...rest} size={size}>
      {renderAvatar({src, icon, size})}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  src: string,
  icon: string,
  size: string,
  iconSize: string
};

export default Avatar;
