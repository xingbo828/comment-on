import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, AddressAutoComplete } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import Icon from '../../../../globalComponents/Icon';
import {
  AddressSearchBarContainer,
  InputWrapper,
  Form,
  MobileCtaWrapper
} from './Styles';

const renderMoveAddress = ({ input, label, ...rest, placeholder }) =>
<InputWrapper>
  <AddressAutoComplete
    onSelect={input.onChange}
    placeholder={placeholder}
    label={label}
    {...rest}
  />
</InputWrapper>;

const { Col, Row } = Grid;

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
        <Row>
          <Col xs={24} lgOffset={1} sm={24} md={24} lg={8}>
            <Field
              component={renderMoveAddress}
              name="pickUpAddress"
              placeholder="Pick-up address"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Field
              component={renderMoveAddress}
              placeholder="Delivery address"
              name="deliveryAddress"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={6}>
          <InputWrapper>
            <Button primary disabled={pristine || submitting || !valid}>
              Get Started
            </Button>
            {/* <Button primary disabled={pristine || submitting || !valid}>
              Get Started
            </Button> */}
          </InputWrapper>
          </Col>
        </Row>
      </Form>
      <MobileCtaWrapper>
        <Button primary icon="arrow-right" onClick={navToSearch}>
          Get Started<Icon icon="magic" />
        </Button>
      </MobileCtaWrapper>
    </AddressSearchBarContainer>
  );
};

export default AddressSearchBar;
