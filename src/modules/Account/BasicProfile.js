import React from 'react';
import { Field } from 'redux-form/immutable';
import Input from '../../globalComponents/Input';


const BasicProfile = ({ handleSubmit, pristine, reset, submitting, updateProfile }) => {
  return (
    <form onSubmit={handleSubmit(updateProfile)}>
        <Field
          component={Input}
          type="text"
          name="displayName"
          label="Display Name"
          />

        <Field
          component={Input}
          type="email"
          name="email"
          label="Email"
          />

        <Field
          component={Input}
          type="date"
          name="birthdate"
          label="Birth Date"
          />
      <input type="submit" disabled={pristine || submitting} value="Save" />
    </form>
  );
};

export default BasicProfile;
