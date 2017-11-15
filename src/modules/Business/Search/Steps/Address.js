import React from 'react';
import { Field } from 'redux-form/immutable';
import Immutable from 'immutable';
import { Button } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import AddressSelection from '../../components/SearchStepAddressSelection/V2';

const renderAddressSelection = ({ input, label, desc }) => {
  const value = Immutable.Iterable.isIterable(input.value) ? input.value.toJS() : input.value;
  const from = value.from ||  null;
  const to = value.to ||null;
  return (
    <AddressSelection
      google={window.google}
      onChange={input.onChange}
      from={from}
      to={to}
    />
  );
};

const Address = ({ handleSubmit, pristine, reset, valid, submitting }) => {

  return (
    <Grid.Container>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderAddressSelection}
          name="addresses"
          desc={renderAddressSelection}
        />
        <Grid.Row>
          <Grid.Col xs={24} sm={24} md={5} lg={4} mdOffset={19} lgOffset={20}>
            <Button
              type="submit"
              primary
              icon="arrow-right"
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

Address.propTypes = {};

export default Address;
