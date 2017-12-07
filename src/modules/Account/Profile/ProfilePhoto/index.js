import React from 'react';
import Icon from '../../../../globalComponents/Icon';
import { Container, StyledImgUpload } from './Styled';
import avatarPlaceHolder from './avatar-placeholder.png';

const ProfilePhoto = ({ value, onChange }) => {
  return (
    <Container>
      <StyledImgUpload
        shape="circle"
        size={180}
        value={value || avatarPlaceHolder}
        onChange={onChange}
        name="avatar"
        actionText={<Icon icon="upload" size="lg" />}
      />
    </Container>
  );
};

export default ProfilePhoto;
