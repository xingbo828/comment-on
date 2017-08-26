import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  ImgUpload,
} from '../../../globalComponents/Form';

const MultiImgUpload = ImgUpload.MultiImgUpload;
const SingleImgUpload = ImgUpload.SingleImgUpload;

const renderBusinessLogo = ({ input, ...rest }) =>
<SingleImgUpload
  input={input}
  {...rest}
  actionText="Upload logo"
/>;


const renderBusinessImgs = ({ input, ...rest }) =>
<MultiImgUpload
  input={input}
  {...rest}
  limit={3}
  actionText="Upload profile images(s)"
/>;

const ProfilePictureCreation = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
      <div>
        <Field
          component={renderBusinessLogo}
          name="businessLogo"
          label="Business Logo"
          />
        <Field
          component={renderBusinessImgs}
          name="businessImgs"
          label="Business profile images"
        />
        <Button
          type="submit"
          primary
          disabled={pristine || submitting || !valid}
        >
          Submit
        </Button>
      </div>
  );
};

export default ProfilePictureCreation;
