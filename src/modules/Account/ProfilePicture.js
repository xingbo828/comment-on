import React from 'react';
import { Field } from 'redux-form/immutable';
import { ImgUpload } from '../../globalComponents/Form';

const ProfilePicture = ({ initialValues, uploadProfileImage, handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={ImgUpload}
        name="photoURL"
        label="Upload Profile Picture"
        />
      <input type="submit" disabled={pristine || submitting || !valid} value="Save" />
    </form>
  );
};

export default ProfilePicture;
