import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../globalComponents/Form';
import { GridContainer } from '../../../globalComponents/Grid';
import VehiclesInfoManagement from '../Compontnets/VehiclesInfoManagement';

const renderVehiclesInfoManagement = ({ input, ...rest }) => {
  return <VehiclesInfoManagement vehicles={input.value} onChange={input.onChange} {...rest} />;
}


const Vehicles = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <GridContainer>
      <form onSubmit={handleSubmit}>
        <Field component={renderVehiclesInfoManagement} name="vehiclesInfo" />
        <Button
          type="submit"
          primary
          disabled={pristine || submitting || !valid}
        >
          Submit
        </Button>
      </form>
    </GridContainer>
  );
};

export default Vehicles;
