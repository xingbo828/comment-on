import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField, TextArea, ImgUpload } from '../../../globalComponents/Form';
import { Container, Form } from './Styled';

import BusinessHour from '../Compontnets/BuesinessHour';

const MultiImgUpload = ImgUpload.MultiImgUpload;

const renderDescriptionTextArea = ({ input, ...rest }) =>
<TextArea input={input} {...rest} rows="4" />;

const renderBusinessHour = ({ input, ...rest }) =>
<BusinessHour input={input} {...rest} />;

const renderBusinessImgs = ({ input, ...rest }) =>
<MultiImgUpload input={input} {...rest} limit={3} actionText="Upload Images(s)" />;

const BusinessCreation = ({ handleSubmit,  pristine, reset, valid, submitting }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          type="text"
          name="businessName"
          label="Business Name"
        />

        <Field component={TextField} type="tel" name="businessPhoneNumber" label="Business Phone Number" />
        <Field component={renderDescriptionTextArea} name="businessDescription" label="Description" />
        <Field component={renderBusinessHour} name="businessHour" label="Business hours" />
        <Field component={renderBusinessImgs} name="businessImgs" label="Business Images" />
        <Button
          type="submit"
          primary
          disabled={pristine || submitting || !valid}
        >Submit</Button>
    </Form>
    </Container>
  );
};

export default BusinessCreation;
