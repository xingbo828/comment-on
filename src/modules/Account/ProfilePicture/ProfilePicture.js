import React from 'react';
import { Field } from 'redux-form/immutable';
import { ImgUpload, Button } from '../../../globalComponents/Form';

const ProfilePicture = ({ initialValues, uploadProfileImage, handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={ImgUpload}
        name="photoURL"
        label="Replace"
        />
      <Button type="submit" primary disabled={pristine || submitting || !valid}>Save</Button>
    </form>
  );
};

export default ProfilePicture;
