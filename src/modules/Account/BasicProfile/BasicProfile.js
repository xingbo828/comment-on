import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField, Radio, RadioGroup, CheckboxGroup } from '../../../globalComponents/Form';

const renderRadioGroup = ({ input, ...rest }) =>
  <RadioGroup {...input} {...rest} label="Gender" />;
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const renderCheckboxGroup = ({...rest}) =>
  <CheckboxGroup {...rest} options={options} label="checkboxes" />;

const BasicProfile = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={TextField}
        type="text"
        name="displayName"
        label="Display Name"
      />

      <Field component={TextField} type="email" name="email" label="Email" />

      <Field name="gender" component={renderRadioGroup}>
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
        <Radio value="other" label="Other" />
      </Field>

       <Field name="check" component={renderCheckboxGroup} />

      <Field
        component={TextField}
        type="date"
        name="birthdate"
        label="Birth Date"
      />

      <Button
        type="submit"
        primary
        disabled={pristine || submitting || !valid}
      >Save</Button>
    </form>
  );
};

export default BasicProfile;
