import React from 'react';
import Icon from '../Icon';
import {
  AvatarContainer,
  AvatarImg
} from './Styles';

const Avatar = ({src, icon, size, ...rest}) => {
  const renderAvatar = ({ src, icon, size }) => {
    if(src) {
      return <AvatarImg src={src} />;
    } else if(icon) {
      return <Icon size={size} icon={icon} />;
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

export default Avatar;
