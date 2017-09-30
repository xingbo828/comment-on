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
      address: null,
      zoom: this.props.zoom
    };
    this.onAddressSelect = this.onAddressSelect.bind(this);
  }

  componentDidMount() {
    const geoCoder = new this.props.google.maps.Geocoder;
    geoCoder.geocode({'placeId': this.props.placeId}, (result, status) => {
      if(status === 'OK') {
        const address = result[0];
        this.setState({
          address: {
            location: {
              lat: address.geometry.location.lat(),
              lng: address.geometry.location.lng(),
            },
            label: address.formatted_address,
            placeId: this.props.placeId
          }
        })
      }
    });

  }

  onAddressSelect(address) {
    this.setState({
      address: {
        location: {
          lat: address.location.lat,
          lng: address.location.lng
        },
        label: address.label,
        placeId: address.placeId
      }
    })
    this.props.onChange(address.placeId);
  };


  render() {
    const { address, zoom } = this.state;
    const { google, label, desc } = this.props;
    const initialValue = address ? address.label : undefined;
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
            <AddressAutoComplete initialValue={initialValue} placeholder="Address" onSelect={this.onAddressSelect} />
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
  placeId: string,
  label: string,
  desc: string
};

AddressSelection.defaultProps = {
  zoom: 15,
  label: 'Address',
  desc: '',
  placeId: null
};

export default AddressSelection;
