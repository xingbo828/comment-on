import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, AddressAutoComplete } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';

import {
  AddressSearchBarContainer,
  InputWrapper
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
  submitting
}) => {
  return (
    <AddressSearchBarContainer>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={24} mdOffset={1} lgOffset={1} sm={24} md={9} lg={9}>
            <Field
              component={renderMoveAddress}
              name="homeAddress"
              placeholder="Start address"
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Field
              component={renderMoveAddress}
              placeholder="Destination address"
              name="destAddress"
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
          <InputWrapper>
            <Button primary icon="arrow-right" disabled={pristine || submitting || !valid}>
              Get Started
            </Button>
          </InputWrapper>
          </Col>
        </Row>
      </form>
    </AddressSearchBarContainer>
  );
};

export default AddressSearchBar;
