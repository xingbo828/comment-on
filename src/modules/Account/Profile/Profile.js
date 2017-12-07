import React, { Component } from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../globalComponents/Form';
import Grid from '../../../globalComponents/Grid';
import Icon from '../../../globalComponents/Icon';
import Layout from '../../../globalComponents/Layout';
import { Paragraph } from '../../../globalComponents/Typography';
import ProfilePhoto from './ProfilePhoto';

const { Form, FormActions, FormInner } = Layout.Form;
const { Container } = Grid;


class Profile extends Component {

  sendConfirmationEmail = e => {
    e.preventDefault();
    this.props.sendEmailConfirmation();
  };

  renderEmailSection = (isEmailVerified, email) => {
    if (!isEmailVerified && email && (this.props.currentEmailValue===email)) {
      return (
        <div>
          <Paragraph>
            <Icon style={{color: 'red'}} icon="exclamation-triangle" /> Your email hasn't been verificated yet. Click the button below to resend the verification email to {email}.
          </Paragraph>
            <Button ghost small onClick={this.sendConfirmationEmail}>
              Send <Icon icon="envelope" />
            </Button>
        </div>
      );
    }
  };

  renderProfilePhoto = ({ input, ...rest }) => {
    return (
      <ProfilePhoto
        value={input.value}
        onChange={input.onChange}
      />
    );
  };



  render() {
    const {
        handleSubmit,
        pristine,
        valid,
        submitting,
        initialValues
      } = this.props;
    return (
      <Container>
        <Form onSubmit={handleSubmit} style={{marginTop: 120}}>
          <Field
              component={this.renderProfilePhoto}
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
            {this.renderEmailSection(initialValues.get('emailVerified'), initialValues.get('email'))}
          </FormInner>
          <FormActions>
            <Button
              style={{ float: 'right' }}
              type="submit"
              primary
              disabled={submitting || pristine || !valid}
            >
              Update <Icon icon={submitting ? 'refresh' : 'pencil'} spin={submitting} />
            </Button>
          </FormActions>
        </Form>
      </Container>
    );
  }
};

export default Profile;
