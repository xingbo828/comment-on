import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../../globalComponents/Form';
import { GridContainer } from '../../../../globalComponents/Grid';
import AddressSelection from '../../components/SearchStepAddressSelection';

const renderAddressSelection =  ({ input, label, desc }) => {
  return <AddressSelection google={window.google} desc={desc} label={label} onChange={input.onChange} placeId={input.value}  />;
}

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
          component={renderAddressSelection}
          name="homeAddress"
          label="Home address"
          desc={homeAddressDesc}
        />
        <Field
          component={renderAddressSelection}
          name="destAddress"
          label="Destination address"
          desc={destAddressDesc}
        />
        <Button type="submit" primary icon="arrow-right" disabled={submitting || !valid}>Next</Button>
      </form>
    </GridContainer>
  );
};

Address.propTypes = {

};

export default Address;
