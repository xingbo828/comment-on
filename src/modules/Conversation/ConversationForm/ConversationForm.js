import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../globalComponents/Form';
import { FormContainer } from './Styled';

const renderTextArea = ({ input, ...rest }) => {
  return <TextField autoComplete="off" input={input} {...rest} />;
};
const ConversationForm = ({ handleSubmit, pristine, valid, submitting }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field name="message" component={renderTextArea} />
      <Button
        type="submit"
        primary
        disabled={submitting || pristine || !valid}>
        Send
      </Button>
    </FormContainer>
  );
};

export default ConversationForm;
