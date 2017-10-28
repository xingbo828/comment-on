import React, { Component } from 'react';
import { string, object, func, number } from 'prop-types';
import isNull from 'lodash/isNull';
import Map from '../../../../globalComponents/Map';
import { Paragraph } from '../../../../globalComponents/Typography';
import AddressAutoComplete from '../../../../globalComponents/Form/AddressAutoComplete';
import Grid from '../../../../globalComponents/Grid';

import {
  AddressSelectionContainer,
  MapContainer,
  MapInnerContainer,
  Label,
  AddressSelectionInner,
  InputContainer
} from './Styled';

const { Row, Col } = Grid;

class AddressSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      zoom: this.props.zoom
    };
    this.onAddressSelect = this.onAddressSelect.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.placeId !== this.props.placeId) {
      this.updateAddress(nextProps.placeId);
    }
  }

  componentDidMount() {
    this.updateAddress(this.props.placeId);
  }


  updateAddress(placeId) {
    if(!!placeId) {
      const geoCoder = new this.props.google.maps.Geocoder();
      geoCoder.geocode({'placeId': placeId}, (result, status) => {
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
  }

  onAddressSelect(address) {
    if(!isNull(address)) {
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
    }
    else {
      this.setState({
        address: null
      });
      this.props.onChange('');
    }
  };

  renderMap(address, google, zoom) {
    return (
      <Col xs={0} sm={0} md={12} lg={12}>
        <MapContainer>
          <MapInnerContainer showMapPlaceHolder={!address}>
          {address && <Map google={google} lat={address.location.lat} lng={address.location.lng} zoom={zoom} />}
          </MapInnerContainer>
        </MapContainer>
      </Col>
    );
  }

  renderInput(initialValue, desc) {
    const isLoading = this.props.placeId !== '' && !initialValue;
    return (
      <Col xs={24} sm={24} md={12} lg={12}>
        <InputContainer isLoading={isLoading}>
          <AddressAutoComplete initialValue={initialValue} placeholder="Address" onSelect={this.onAddressSelect} />
          <Paragraph>{desc}</Paragraph>
        </InputContainer>
      </Col>
    );
  }


  render() {
    const { address, zoom } = this.state;
    const { google, label, desc } = this.props;
    const initialValue = address ? address.label : undefined;
    return (
      <AddressSelectionContainer>
        <Label>{label}</Label>

        <AddressSelectionInner>
          <Row>
          {this.renderMap(address, google, zoom)}
          {this.renderInput(initialValue, desc)}
          </Row>
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
