import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, TextField, Legend } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';

const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const ContactInfo = ({
  handleSubmit,
  next,
  previous,
  valid,
  submitting,
  goBack,
  contactInfo
}) => {
  console.log(contactInfo)
  return (
    <section>
      <Grid.Container>
        <Form onSubmit={handleSubmit}>
          <FormInner>
            <Legend>How can we contact you?</Legend>

            <FormFieldSet>
              <Field
                component={TextField}
                name="name"
                label="Name"
              />
            </FormFieldSet>

            <FormFieldSet>
              <Field
                component={TextField}
                name="phoneNumber"
                label="Phone number"
              />
            </FormFieldSet>

            <FormFieldSet>
              <Field
                component={TextField}
                name="email"
                label="Email"
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
      </Grid.Container>
    </section>
  );
};

export default ContactInfo;