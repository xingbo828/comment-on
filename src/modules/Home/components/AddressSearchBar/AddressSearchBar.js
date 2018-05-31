import React from 'react';
import { Field } from 'redux-form/immutable';
import { AddressAutoComplete } from '../../../../globalComponents/Form';
import {
  AddressSearchBarContainer,
  InputWrapper,
  Form,
  Button,
  Copy
} from './Styles';

const renderMoveAddress = ({ input, label, ...rest, placeholder }) => (
  <AddressAutoComplete
    onSelect={input.onChange}
    placeholder={placeholder}
    label={label}
    {...rest}
  />
)


const AddressSearchBar = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  navToSearch
}) => {
  return (
    <AddressSearchBarContainer>
      <Form onSubmit={handleSubmit}>
        <Copy>
          Inneed is the fastest and easiest way to find professional movers in your area. We partner with a varietey of moving companys to help you choose a mover who fits your exact needs. To get started, tell us where you're moving below.
        </Copy>
        <InputWrapper>
          <Field
            component={renderMoveAddress}
            name="pickUpAddress"
            label="Pick-up address"
          />
        </InputWrapper>
        <InputWrapper>
          <Field
            component={renderMoveAddress}
            label="Delivery address"
            name="deliveryAddress"
          />
        </InputWrapper>
        <Button primary disabled={pristine || submitting || !valid}>
          Get Started
        </Button>
      </Form>
    </AddressSearchBarContainer>
  );
};

export default AddressSearchBar;
