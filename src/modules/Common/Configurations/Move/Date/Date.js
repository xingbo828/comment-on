import React from 'react';
// import isNull from 'lodash/isNull';
import Immutable from 'immutable';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';
import DateSelection from './DateSelection';
import StorageSelection from './StorageSelection'


const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const renderDateSelection = ({ input, label }) => {
  const value = Immutable.Iterable.isIterable(input.value)
    ? input.value.toJS()
    : input.value;
  return (
    <DateSelection
      label={label}
      value={value||undefined}
      onChange={input.onChange}
    />
  );
};

const renderStorageSelection = ({ input, label }) => {
  return (
    <StorageSelection
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const DateTime = ({
  handleSubmit,
  next,
  previous,
  valid,
  submitting,
  goBack
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInner>
        <FormFieldSet>
          <Field
            component={renderDateSelection}
            name="pickUpDate"
            label="Which day would you like to schedule your move? You may choose more than one."
          />
        </FormFieldSet>
        <FormFieldSet>
          <Field
            component={renderStorageSelection}
            name="storage"
            label="Do you require storage services?"
          />
        </FormFieldSet>
      </FormInner>
      <FormActions>
      {next && <Button
          style={{ float: 'right' }}
          type="submit"
          primary
          disabled={submitting || !valid}
        >
          Next<Icon icon="arrow-right" />
        </Button>}
        {previous && <Button onClick={goBack} style={{ float: 'left' }} ghost>
          <Icon icon="arrow-left" />Back
        </Button>}
      </FormActions>
    </Form>
  );
};

export default DateTime;
