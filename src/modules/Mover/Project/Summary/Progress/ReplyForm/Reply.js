import React from 'react';

import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  Label,
  SubLabel
} from '../../../../../../globalComponents/Form';
import {
  ActionContainer
} from './Styled';

const ReplyForm = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Label
        htmlFor="estimatedPrice"
        style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: 1.1 }}
      >
        Estimated price
      </Label>
      <SubLabel>Estimated price</SubLabel>
      <Field component={TextField} type="number" name="estimatedPrice" />
      <Label
        htmlFor="notes"
        style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: 1.1 }}
      >
        Notes
      </Label>
      <SubLabel>Additonal notes for the customer.</SubLabel>
      <Field component={TextArea} name="notes" />
      <ActionContainer>

        <Button
          disabled={pristine || submitting || !valid}
          small
          primary
          type="submit"
          style={{marginLeft: 16}}
        >
          Submit
        </Button>
        <Button
          small
          ghost
          danger
        >
          Decline
        </Button>
      </ActionContainer>
    </form>
  );
};

export default ReplyForm;
