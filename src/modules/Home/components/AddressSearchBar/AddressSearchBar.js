import React from 'react';
import { Field } from 'redux-form/immutable';
import { AddressAutoComplete } from '../../../../globalComponents/Form';
import {
  AddressSearchBarContainer,
  InputWrapper,
  Form,
  MobileCtaWrapper,
  Button
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
      <MobileCtaWrapper>
        <Button primary onClick={navToSearch}>Get Started</Button>
      </MobileCtaWrapper>
    </AddressSearchBarContainer>
  );
};

export default AddressSearchBar;
