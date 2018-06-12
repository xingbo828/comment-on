import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';
import Icon from '../../../../../globalComponents/Icon';
import ResidenceTypeSelection from './ResidenceTypeSelection';
import Access from './Access';

const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const renderResidenceTypeSelection = ({ input, name, label, desc }) => {
  return (
    <ResidenceTypeSelection
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const renderPickUpAccess = ({ input, name, label, desc }) => {
  return (
    <Access
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const renderDeliveryAccess = ({ input, name, label, desc }) => {
  return (
    <Access
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const Logistics = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  goBack
}) => {
  return (
    <section>
      <Grid.Container>
        <Form onSubmit={handleSubmit}>
          <FormInner>
            <FormFieldSet>
              <Field
                component={renderResidenceTypeSelection}
                name="residenceType"
                label="Choose the option that best describes the pick-up space"
              />
            </FormFieldSet>
            <FormFieldSet>
              <Field
                component={renderPickUpAccess}
                name="pickUpAccess"
                label="How is the pick-up space accessed?"
              />
            </FormFieldSet>
            <FormFieldSet>
              <Field
                component={renderDeliveryAccess}
                name="deliveryAccess"
                label="How is the delivery space accessed?"
              />
            </FormFieldSet>
          </FormInner>
          <FormActions>
            <Button
              style={{ float: 'right' }}
              type="submit"
              primary
              disabled={submitting || !valid}
            >
              Next<Icon icon="arrow-right" />
            </Button>
            <Button onClick={goBack} ghost style={{ float: 'left' }}>
              <Icon icon="arrow-left" />Back
            </Button>
          </FormActions>
        </Form>
      </Grid.Container>
    </section>
  );
};

Logistics.propTypes = {};

export default Logistics;
