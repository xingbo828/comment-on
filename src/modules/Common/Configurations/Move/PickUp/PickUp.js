import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Layout from '../../../../../globalComponents/Layout';
import Icon from '../../../../../globalComponents/Icon';
import ResidenceTypeSelection from './ResidenceTypeSelection';
import Access from './Access';
import Parking from './Parking';
import JunkRemoval from './JunkRemoval';


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

const renderParking = ({ input, name, label, desc }) => {
  return (
    <Parking
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const renderJunkRemoval = ({ input, label }) => {
  return (
    <JunkRemoval
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const PickUp = ({
  handleSubmit,
  next,
  previous,
  valid,
  submitting,
  goBack
}) => {
  return (
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
            component={renderParking}
            name="deliveryAccess"
            label="Where is parking available at the pick up location?"
          />
        </FormFieldSet>
        <FormFieldSet>
          <Field
            component={renderJunkRemoval}
            name="pickUpJunkRemoval"
            label="Will you require junk removal and disposal?"
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
  );
};

export default PickUp;
