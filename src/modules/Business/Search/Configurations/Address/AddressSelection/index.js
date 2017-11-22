import React, { Component } from 'react';
import { string, object, func } from 'prop-types';
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
      this.convertPlaceIdToAddr(this.state.from),
      this.convertPlaceIdToAddr(this.state.to)
    ]).then(([from, to]) => {
      this.setState({
        from: this.formatAddr(from),
        to: this.formatAddr(to)
      });
    });
  }

  formatAddr = (addr) => {
    if(isNull(addr)) {
      return addr;
    }
    return {
      location: {
        lat: addr.geometry.location.lat(),
        lng: addr.geometry.location.lng(),
      },
      formattedAddress: addr.formatted_address,
      placeId: addr.place_id
    };
  }

  onFromAddressSelect = ({ gmaps }) => {
    this.setState({
      from: this.formatAddr(gmaps)
    });
  }

  onToAddressSelect = ({gmaps}) => {
    this.setState({
      to: this.formatAddr(gmaps)
    });
  };

  convertPlaceIdToAddr = (placeId) => {
    if(!placeId) {
      return Promise.resolve(null);
    }
    if(isObject(placeId)) {
      return Promise.resolve(placeId);
    }
    const geocoder = new this.props.google.maps.Geocoder();
    return new Promise((resolve, reject)=> {
      geocoder.geocode({placeId}, (results, status) => {
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
      pickUpAddress: from.placeId,
      deliveryAddress: to.placeId
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
    const markers = [from, to].filter(i=> !isNull(i)).filter(t => isObject(t)).map(x => x.location);
    return (
      <Container>
        <MapContainer>
          <Map google={google} markers={markers} direction onRouteChange={this.onRouteChange}/>
        </MapContainer>
        {this.renderRouteInfo(route)}
        <InputsContainer>
          <InputContainer><AddressAutoComplete  icon="circle-o" initialValue={this.getInitValue(from)} placeholder="Pick-up address" onSelect={this.onFromAddressSelect} /></InputContainer>
          <InputContainer><AddressAutoComplete  initialValue={this.getInitValue(to)} placeholder="Delivery address" onSelect={this.onToAddressSelect} /></InputContainer>
        </InputsContainer>
      </Container>
    );
  }
}

AddressSelection.propTypes = {
  onChange: func.isRequired,
  google: object.isRequired,
  from: string,
  to: string
};

AddressSelection.defaultProps = {
  from: null,
  to: null
};


export default AddressSelection;
