import React from 'react';
import { Field } from 'redux-form/immutable';
import Immutable from 'immutable';
import { Button } from '../../../../../globalComponents/Form';
import Layout from '../../../../../globalComponents/Layout';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import AddressSelection from './AddressSelection';
import { Heading, Paragraph } from '../../../../../globalComponents/Typography';


const { Form, FormActions, FormHeading } = Layout.Form;

const renderAddressSelection = ({ input, label, desc }) => {
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
    <Grid.Container>
      <FormHeading>
        <Heading wrapperTag="h1">Address Information</Heading>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </Paragraph>
      </FormHeading>
      <Form style={{overflow: 'hidden'}} onSubmit={handleSubmit}>
        <Field
          component={renderAddressSelection}
          name="addresses"
          desc={renderAddressSelection}
        />
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={submitting || !valid}
          >
            Next <Icon icon="arrow-right" />
          </Button>
      </FormActions>
      </Form>
    </Grid.Container>
  );
};

Address.propTypes = {};

export default Address;
