import React from 'react';
import Icon from '../Icon';
import { string } from 'prop-types';
import {
  AvatarImg
} from './Styles';

const Avatar = ({src, icon, size, iconSize,...rest}) => {
  const renderAvatar = ({ src, icon, size }) => {
    if(src) {
      return <AvatarImg src={src} size={size} {...rest} />;
    } else if(icon) {
      return <Icon size={iconSize} icon={icon} />;
    } else {
      return <Icon size="lg" icon="user"/>;
    }
  };

  return renderAvatar({src, icon, size});
};

Avatar.propTypes = {
  src: string,
  icon: string,
  size: string,
  iconSize: string
};

export default Avatar;
