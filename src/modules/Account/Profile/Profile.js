import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField } from '../../../globalComponents/Form';
import Grid from '../../../globalComponents/Grid';
import Icon from '../../../globalComponents/Icon';
import Layout from '../../../globalComponents/Layout';
import { Heading } from '../../../globalComponents/Typography';
import { withTheme } from 'styled-components';

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const Profile = ({ handleSubmit, pristine, reset, valid, submitting }) => {

  return (
    <Grid.Container>
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

        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={submitting || !valid}
          >
           <Icon icon="pencil" /> Update
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default withTheme(Profile);
