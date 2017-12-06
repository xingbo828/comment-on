import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../globalComponents/Form';
import Grid from '../../../globalComponents/Grid';
import Icon from '../../../globalComponents/Icon';
import Layout from '../../../globalComponents/Layout';
import { Paragraph } from '../../../globalComponents/Typography';
import ProfilePhoto from './ProfilePhoto';

const { Form, FormActions, FormInner } = Layout.Form;
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
        <div>
          <Paragraph>
            <Icon style={{color: 'red'}} icon="exclamation-triangle" /> Your email hasn't been verificated yet. Click the button below to resend the verification email to {email}.
          </Paragraph>
            <Button ghost small onClick={sendConfirmationEmail}>
              Re-send <Icon icon="envelope" />
            </Button>
        </div>
      );
    }
  };

  const renderProfilePhoto = ({ input, ...rest }) => {
    return (
      <ProfilePhoto
        value={input.value}
        onChange={input.onChange}
      />
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} style={{marginTop: 120}}>
        <Field
            component={renderProfilePhoto}
            name="photoURL"
          />
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
