import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField, TextArea } from '../../../globalComponents/Form';
import { Container } from './Styled';

const renderDescriptionTextArea = ({ input, ...rest }) =>
<TextArea input={input} {...rest} rows="4" />;

const BusinessCreation = ({ handleSubmit,  pristine, reset, valid, submitting }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          type="text"
          name="businessName"
          label="Business Name"
        />

        <Field component={TextField} type="tel" name="businessPhoneNumber" label="Business Phone Number" />

        <Field component={renderDescriptionTextArea} name="businessDescription" label="Description" />

        <Button
          type="submit"
          primary
          disabled={pristine || submitting || !valid}
        >Submit</Button>
    </form>
    </Container>
  );
};

export default BusinessCreation;
