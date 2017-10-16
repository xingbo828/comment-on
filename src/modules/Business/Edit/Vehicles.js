import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../globalComponents/Form';
import Grid from '../../../globalComponents/Grid';
import VehiclesInfoManagement from '../components/VehiclesInfoManagement';

const renderVehiclesInfoManagement = ({ input, ...rest }) => {
  return <VehiclesInfoManagement vehicles={input.value.toJS()} onChange={input.onChange} {...rest} />;
}


const Vehicles = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Grid.Container>
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
    </Grid.Container>
  );
};

export default Vehicles;
