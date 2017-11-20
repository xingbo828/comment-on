import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import VehicleSelection from '../../components/SearchConfigurations/VehicleSizeSelection';

const renderVehicleSelection = ({ input }) => {
  return <VehicleSelection value={input.value} onChange={input.onChange} />;
};

const Vehicle = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <Grid.Container>
      <form onSubmit={handleSubmit}>
        <Field component={renderVehicleSelection} name="vehicle" />
        <Grid.Row>
          <Grid.Col xs={24} sm={24} md={5} lg={4} mdOffset={19} lgOffset={20}>
            <Button
              type="submit"
              icon="arrow-right"
              primary
              disabled={submitting || !valid}
            >
              Next
            </Button>
          </Grid.Col>
        </Grid.Row>
      </form>
    </Grid.Container>
  );
};

export default Vehicle;
