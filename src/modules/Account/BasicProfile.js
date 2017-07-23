import React from 'react';
import { Field } from 'redux-form/immutable';
import { TextField, Radio, RadioGroup, Checkbox, CheckboxGroup } from '../../globalComponents/Form';

const renderRadioGroup = ({ input, ...rest }) =>
  <RadioGroup
    {...input}
    {...rest}
    label="Gender"
  />
const renderCheckboxGroup = ({ input, ...rest }) =>
  <CheckboxGroup
    {...input}
    {...rest}
    label="Test"
  />

const BasicProfile = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={TextField}
        type="text"
        name="displayName"
        label="Display Name"
        />

      <Field
        component={TextField}
        type="email"
        name="email"
        label="Email"
        />

      <Field name="gender" component={renderRadioGroup}>
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </Field>

      <Field
        component={TextField}
        type="date"
        name="birthdate"
        label="Birth Date"
        />
      <input type="submit" disabled={pristine || submitting || !valid} value="Save" />
    </form>
  );
};

export default BasicProfile;
