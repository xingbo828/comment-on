import React, { Component } from 'react';
import { object, func } from 'prop-types';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';
import Map from '../../../../../../globalComponents/Map';
import Icon from '../../../../../../globalComponents/Icon';
import AddressAutoComplete from '../../../../../../globalComponents/Form/AddressAutoComplete';
import {
  Container,
  MapContainer,
  RouteInfoContainer,
  InputsContainer,
  InputContainer
} from './Styled';

class AddressSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.from,
      to: props.to,
      route: null
    };
  }

  componentDidMount() {
    Promise.all([
      this.convertLocationToAddr(this.state.from),
      this.convertLocationToAddr(this.state.to)
    ]).then(([from, to]) => {
      this.setState({
        from: this.formatAddr(from),
        to: this.formatAddr(to)
      });
    }).catch(err => {
      console.log(err);
    });
  }

  formatAddr = (addr) => {
    if(isNull(addr)) {
      return addr;
    }
    return {
      lat: addr.geometry.location.lat(),
      lng: addr.geometry.location.lng(),
      formattedAddress: addr.formatted_address
    };
  }

  onFromAddressSelect = (v) => {
    this.setState({
      from: v === null ? v : this.formatAddr(v.gmaps)
    });
  }

  onToAddressSelect = (v) => {
    this.setState({
      to: v === null ? v : this.formatAddr(v.gmaps)
    });
  };

  convertLocationToAddr = (location) => {
    if(!location) {
      return Promise.resolve(null);
    }
    // if(isObject(placeId)) {
    //   return Promise.resolve(placeId);
    // }
    const geocoder = new this.props.google.maps.Geocoder();
    return new Promise((resolve, reject)=> {
      const locationLatLng = new this.props.google.maps.LatLng(location.lat, location.lng);
      geocoder.geocode({ location: locationLatLng }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            resolve(results[0]);
          }
        }
        reject(status)
      });
    });

  }

  onRouteChange = (result) => {
    this.setState({
      route: result.routes[0].legs[0]
    });
    const { from, to } = this.state;
    this.props.onChange({
      pickUpAddress: from,
      deliveryAddress: to
    });
  };

  renderRouteInfo = (routeInfo) => {
    return (
      <RouteInfoContainer visible={routeInfo}>
          <Icon icon="truck" /> {routeInfo && routeInfo.distance.text}
      </RouteInfoContainer>
    );
  }

  getInitValue = (addr) => {
    if(!addr) {
      return '';
    }
    return addr.formattedAddress;
  }

  render() {
    const { google } = this.props;
    const { from, to, route } = this.state;
    const markers = [from, to].filter(i=> !isNull(i)).filter(t => isObject(t));
    return (
      <Container>
        <MapContainer>
          <Map google={google} markers={markers} direction onRouteChange={this.onRouteChange}/>
        </MapContainer>
        {this.renderRouteInfo(route)}
        <InputsContainer>
          <InputContainer>
            <AddressAutoComplete  
              icon="circle-o" 
              initialValue={this.getInitValue(from)} 
              label="Pick-up address" 
              onSelect={this.onFromAddressSelect} 
            />
          </InputContainer>
          <InputContainer>
            <AddressAutoComplete  
              initialValue={this.getInitValue(to)} 
              label="Delivery address" 
              onSelect={this.onToAddressSelect} 
            />
          </InputContainer>
        </InputsContainer>
      </Container>
    );
  }
}

AddressSelection.propTypes = {
  onChange: func.isRequired,
  google: object.isRequired,
  from: object,
  to: object
};

AddressSelection.defaultProps = {
  from: null,
  to: null
};


export default AddressSelection;
