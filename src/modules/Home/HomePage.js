import React, { Component } from 'react';
import { AddressAutoComplete } from '../../globalComponents/Form';
import {
    Container,
    Banner,
    AddressSearchWrapper,
    AddressSearchWrapperWithRadius,
    AddressSearchButton,
    Form
  } from './Styled';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress: null,
      destinationAddress: null
    };
    this.isValidForSubmission = this.isValidForSubmission.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  setAddress(geoObj, type) {
    const currentState = Object.assign({}, this.state);
    currentState[type] = geoObj;
    this.setState(currentState);
  }

  isValidForSubmission() {
    return this.state.currentAddress && this.state.destinationAddress;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.getBusinessList(this.state.currentAddress, this.state.destinationAddress);
  }

  render() {
    return (
      <Container>
        <Banner>
          <Form onSubmit={this.handleFormSubmit}>
          <AddressSearchWrapperWithRadius>
            <AddressAutoComplete
              handleSuggestionSelect={(geoObj) =>{ this.setAddress(geoObj, 'currentAddress') }}
              placeholder="current address"
              label="Moving from"
            />
          </AddressSearchWrapperWithRadius>
          <AddressSearchWrapper>
            <AddressAutoComplete
              handleSuggestionSelect={(geoObj) =>{ this.setAddress(geoObj, 'destinationAddress') }}
              placeholder="destination address"
              label="to"
            />
          </AddressSearchWrapper>
          <AddressSearchButton primary disabled={!this.isValidForSubmission()}>Search</AddressSearchButton>
          </Form>
        </Banner>
      </Container>
    );
  }
};


export default HomePage;
