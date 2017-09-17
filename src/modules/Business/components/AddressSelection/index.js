import React, { Component } from 'react';
import { string, object, func, number } from 'prop-types';
import Map from '../../../../globalComponents/Map';
import AddressAutoComplete from '../../../../globalComponents/Form/AddressAutoComplete';
import {
  AddressSelectionContainer,
  MapContainer,
  MapInnerContainer,
  Label,
  AddressSelectionInner,
  InputContainer
} from './Styled';
class AddressSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      zoom: this.props.zoom
    };
    this.onAddressSelect = this.onAddressSelect.bind(this);
  }


  onAddressSelect(address) {
    this.setState({
      address
    });
    this.props.onChange(address);
  }


  render() {
    const { address, zoom } = this.state;
    const { google, label, desc } = this.props;
    return (
      <AddressSelectionContainer>
        <Label>{label}</Label>
        <AddressSelectionInner>
          <MapContainer>
            <MapInnerContainer showMapPlaceHolder={!address}>
            {address && <Map google={google} lat={address.location.lat} lng={address.location.lng} zoom={zoom} />}
            </MapInnerContainer>
          </MapContainer>
          <InputContainer>
            <AddressAutoComplete placeholder="where you from?" onSelect={this.onAddressSelect} />
            <p>{desc}</p>
          </InputContainer>
        </AddressSelectionInner>
      </AddressSelectionContainer>
    );
  }
}

AddressSelection.propTypes = {
  google: object.isRequired,
  onChange: func.isRequired,
  zoom: number,
  address: object,
  label: string,
  desc: string
};

AddressSelection.defaultProps = {
  zoom: 15,
  label: 'Address',
  desc: ''
};

export default AddressSelection;
