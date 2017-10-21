import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import VehicleSelection from '../../components/SearchVehicleSizeSelection';


const renderVehicleSelection =  ({ input }) => {
  console.log(input.value);
  return <VehicleSelection value={input.value}  onChange={input.onChange} />;
}


const Vehicle = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Grid.Container>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderVehicleSelection}
          name="vehicle"
        />
        <Button style={{float: 'right'}} type="submit" icon="arrow-right" primary disabled={submitting || !valid}>Next</Button>
      </form>
    </Grid.Container>
  );
};



export default Vehicle;
