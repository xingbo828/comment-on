import React from 'react';
import { ImgUpload } from '../../../../globalComponents/Form';
import Icon from '../../../../globalComponents/Icon';
import { Container } from './Styled';
import avatarPlaceHolder from './avatar-placeholder.png';

const ProfilePhoto = ({ value, onChange }) => {
  return (
    <Container>
      <ImgUpload.SingleImgUpload
        shape="circle"
        style={{ width: 180, margin: '0 auto', transform: 'translateY(-90px)' }}
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
