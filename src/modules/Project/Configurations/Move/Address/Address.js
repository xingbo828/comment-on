import React from 'react';
import { Field } from 'redux-form/immutable';
import Immutable from 'immutable';
import { Button, Legend } from '../../../../../globalComponents/Form';
import Layout from '../../../../../globalComponents/Layout';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import AddressSelection from './AddressSelection';


const { Form, FormInner, FormActions, FormFieldSet } = Layout.Form;

const renderAddressSelection = ({ input, label, desc, ...rest }) => {
  const value = Immutable.Iterable.isIterable(input.value)
    ? input.value.toJS()
    : input.value;
  const from = value.pickUpAddress || null;
  const to = value.deliveryAddress || null;
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
    <section>
      <Grid.Container>
        <Form onSubmit={handleSubmit}>
          <FormInner>
            <FormFieldSet>
              <Legend>Start by telling us your pick-up and destination address</Legend>
              <Field
                component={renderAddressSelection}
                name="addresses"
                desc={renderAddressSelection}
              />
            </FormFieldSet>
            <FormActions>
              <Button
                style={{ float: 'right' }}
                type="submit"
                primary
                disabled={submitting || !valid}
              >
                Next<Icon icon="arrow-right" />
              </Button>
            </FormActions>
          </FormInner>
        </Form>
      </Grid.Container>
    </section>
  );
};

Address.propTypes = {};

export default Address;
