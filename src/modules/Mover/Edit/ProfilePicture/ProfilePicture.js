import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  ImgUpload,
} from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';

const MultiImgUpload = ImgUpload.MultiImgUpload;
const SingleImgUpload = ImgUpload.SingleImgUpload;

const renderBusinessLogo = ({ input, ...rest }) => {
  return <SingleImgUpload
  input={input}
  {...rest}
  actionText="Upload logo"
/>;
}



const renderBusinessImgs = ({ input, ...rest }) =>{
  return <MultiImgUpload
  input={input}
  images={input.value}
  {...rest}
  limit={3}
  actionText="Upload profile images(s)"
/>;
}

const { Container } = Grid;
const ProfilePicture = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  doneLoading
}) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderBusinessLogo}
          name="logo"
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
      </form>
    </Container>
  );
};

export default ProfilePicture;
