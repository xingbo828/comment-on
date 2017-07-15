import React from 'react';
import { Field } from 'redux-form/immutable';
import styled from 'styled-components';

const FormLabel = styled.label`
  display: block;
  padding: .5rem 0;
`;

const BasicProfile = ({ handleSubmit, pristine, reset, submitting, updateProfile }) => {
  return (
    <form onSubmit={handleSubmit(updateProfile)}>
      <FormLabel htmlFor="displayName">
        Display Name:
        <Field
          component="input"
          type="text"
          name="displayName"
          />
      </FormLabel>
      <FormLabel htmlFor="phoneNumber">
        Phone Number:
        <Field
          component="input"
          type="tel"
          name="phoneNumber"
          />
      </FormLabel>
      <FormLabel htmlFor="email">
        Email:
        <Field
          component="input"
          type="email"
          name="email"
          />
      </FormLabel>
      <input type="submit" value="Save" />
    </form>
  );
};

export default BasicProfile;
