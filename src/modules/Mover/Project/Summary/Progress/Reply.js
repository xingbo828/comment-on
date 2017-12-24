import React from 'react';
import connect from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  Label
} from '../../../../../globalComponents/Form';

const ReplyForm = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={TextField} name="estimatedPrice" />
      <Field component={TextArea} name="notes" />
    </form>
  );
};


const enhance = compose(
  // connect(),
  reduxForm({
    form: 'mover.project.reply',
    onSubmit: (values, dispatch, props) => {
    },
    onSubmitSuccess: (result, dispatch, props) => {
    },
    onSubmitFail: (errors, dispatch, submitError) => {
    }
  })
);

export default enhance(ReplyForm);

