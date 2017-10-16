import React from 'react';
import { AddressAutoComplete } from '../../globalComponents/Form';
import { Field } from 'redux-form/immutable';
import {
    Container,
    Banner,
    SearchWrapper,
    SearchWrapperWithRadius,
    SearchButton,
    Form
  } from './Styled';

const renderMoveAddress = ({ input, label, ...rest, placeholder }) =>
  <AddressAutoComplete
    onSelect={input.onChange}
    placeholder={placeholder}
    label={label}
    {...rest}
  />;


const HomePage = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => (
  <Container>
    <Banner>
      <Form onSubmit={handleSubmit}>
      <SearchWrapperWithRadius>
        <Field
          component={renderMoveAddress}
          name="moveFrom"
          placeholder="current address"
          label="from"
        />
      </SearchWrapperWithRadius>
      <SearchWrapper>
        <Field
          component={renderMoveAddress}
          placeholder="destination address"
          name="moveTo"
          label="to"
        />
      </SearchWrapper>
      <SearchButton primary disabled={pristine || submitting || !valid}>Search</SearchButton>
      </Form>
    </Banner>
  </Container>
  );


export default HomePage;
