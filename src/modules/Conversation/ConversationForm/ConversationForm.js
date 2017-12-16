import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextArea } from '../../../globalComponents/Form';
import { FormContainer } from './Styled';

const renderTextArea = ({ input, ...rest }) => {
  return <TextArea input={input} resizable={false} {...rest} />;
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
