import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import Icon from '../../../../globalComponents/Icon';
import Layout from '../../../../globalComponents/Layout';
import { Heading } from '../../../../globalComponents/Typography';
import VehiclesInfoManagement from './VehiclesInfoManagement';

const renderVehiclesInfoManagement = ({ input, ...rest }) => {
  const pureValue = (input.value.toJS && input.value.toJS()) || input.value;
  return <VehiclesInfoManagement vehicles={pureValue} onChange={input.onChange} {...rest} />;
}

const { Container} = Grid;

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const Vehicles = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Container>
      <FormHeading>
        <Heading wrapperTag="h1">Profile Pictures</Heading>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
      <FormInner>
        <Field component={renderVehiclesInfoManagement} name="vehiclesInfo" />
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
    </Container>
  );
};

export default Vehicles;
