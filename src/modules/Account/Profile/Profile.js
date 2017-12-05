import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../globalComponents/Form';
import Grid from '../../../globalComponents/Grid';
import Icon from '../../../globalComponents/Icon';
import Layout from '../../../globalComponents/Layout';
import { Heading } from '../../../globalComponents/Typography';

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;
const { Container } = Grid;

const Profile = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  sendEmailConfirmation,
  initialValues,
  currentEmailValue
}) => {

  const sendConfirmationEmail = e => {
    e.preventDefault();
    sendEmailConfirmation();
  };

  const renderEmailSection = (isEmailVerified, email) => {
    if (!isEmailVerified && email && (currentEmailValue===email)) {
      return (
        <Button ghost onClick={sendConfirmationEmail}>
          Re-send verification Email to {email} <Icon icon="envelope" />
        </Button>
      );
    }
  };

  return (
    <Container>
      <FormHeading>
        <Heading wrapperTag="h1">Account Profile</Heading>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
        <FormInner>
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
          {renderEmailSection(initialValues.get('emailVerified'), initialValues.get('email'))}
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={submitting || pristine || !valid}
          >
            Update <Icon icon="pencil" />
          </Button>
        </FormActions>
      </Form>
    </Container>
  );
};

export default Profile;
