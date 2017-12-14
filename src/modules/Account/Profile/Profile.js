import React, { Component } from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../globalComponents/Form';
import Grid from '../../../globalComponents/Grid';
import Icon from '../../../globalComponents/Icon';
import Layout from '../../../globalComponents/Layout';
import ProfilePhoto from './ProfilePhoto';

const { Form, FormActions, FormInner } = Layout.Form;
const { Container } = Grid;

class Profile extends Component {

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
        submitting
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
