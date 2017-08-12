import React from 'react';
import { Field } from 'redux-form/immutable';
import { ImgUpload, Button } from '../../../globalComponents/Form';

const renderProfileUpload = ({ input, ...rest }) =>
<ImgUpload.SingleImgUpload input={input} {...rest} actionText="Upload" />;

const ProfilePicture = ({ initialValues, uploadProfileImage, handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={renderProfileUpload}
        name="photoURL"
        label="Profile Picture"
        />
      <Button type="submit" primary disabled={pristine || submitting || !valid}>Save</Button>
    </form>
  );
};

export default ProfilePicture;
