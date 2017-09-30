import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../../globalComponents/Form';
import { GridContainer } from '../../../../globalComponents/Grid';
import AddressSelection from '../../components/AddressSelection';

const renderAddressSelection = (desc) => ({ input, label }) =>
  <AddressSelection google={window.google} desc={desc} label={label} onChange={input.onChange} placeId={input.value}  />;

const Address = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  const homeAddressDesc= `Home address description`;
  const destAddressDesc= `Destination address description`;
  return (
    <GridContainer>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderAddressSelection(homeAddressDesc)}
          name="homeAddress"
          label="Home address"
        />
        <Field
          component={renderAddressSelection(destAddressDesc)}
          name="destAddress"
          label="Destination address"
        />
        <Button type="submit" primary>Next</Button>
      </form>
    </GridContainer>
  );
};

Address.propTypes = {

};

export default Address;
