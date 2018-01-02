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
  handleSkip,
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Container>
      <FormHeading>
        <Heading wrapperTag="h1">Vehicles</Heading>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
      <FormInner>
        <Field component={renderVehiclesInfoManagement} name="vehiclesInfo" />
        </FormInner>
        <FormActions>
        <Button
            style={{ float: 'right', marginLeft: '1rem' }}
            type="submit"
            primary
            disabled={submitting || pristine || !valid}
          >
            Update<Icon icon="pencil" />
          </Button>
          <Button style={{ float: 'right' }} ghost onClick={handleSkip}>
            Skip<Icon icon="angle-double-right" />
          </Button>
        </FormActions>
      </Form>
    </Container>
  );
};

export default Vehicles;
