import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Avatar from '../../globalComponents/Avatar';

const avatarSrc = 'https://weneedfun.com/wp-content/uploads/2015/10/Steve-Jobs-Photos-18.jpg';
const AvatarWithImg = withInfo('Avatar with image src')(() => <Avatar src={avatarSrc} />);
const AvatarWithImgAndSize = withInfo('Avatar with image src and size')(() => <Avatar size="lg" src={avatarSrc} />);

const AvatarWithIcon = withInfo('Avatar with icon')(()=><Avatar style={{backgroundColor: '#87d068', color: 'white'}} icon="user-o" />);

const AvatarWithIconAndSize = withInfo('Avatar with icon and size')(()=><Avatar style={{backgroundColor: '#87d068', color: 'white'}} size="lg" iconSize="2x" icon="user-o" />);

const AvatarStory = storiesOf('Global/Avatar', module)
  .add('with img src', AvatarWithImg)
  .add('with img src and size', AvatarWithImgAndSize)
  .add('with icon', AvatarWithIcon)
  .add('with icon and size', AvatarWithIconAndSize);
export default AvatarStory;
