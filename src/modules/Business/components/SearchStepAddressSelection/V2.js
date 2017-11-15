import React, { Component } from 'react';
import { string, object, func, number } from 'prop-types';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';
import Map from '../../../../globalComponents/Map';
import { Paragraph } from '../../../../globalComponents/Typography';
import Icon from '../../../../globalComponents/Icon';
import AddressAutoComplete from '../../../../globalComponents/Form/AddressAutoComplete';
import Grid from '../../../../globalComponents/Grid';
import {
  Container,
  MapContainer,
  RouteInfoContainer,
  InputsContainer,
  InputContainer
} from './V2Styled';

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
    const geocoder = new this.props.google.maps.Geocoder;
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
      from: from.placeId,
      to: to.placeId
    });
  };

  renderRouteInfo = (routeInfo) => {
    return (
      <RouteInfoContainer>
        <Grid.Row>
          <Grid.Col xs={12} sm={8} md={6} lg={4}>
            <Icon icon="truck" /> {routeInfo.distance.text}
          </Grid.Col>
          <Grid.Col xs={12} sm={8} md={6} lg={4}>
            <Icon icon="clock-o" /> {routeInfo.duration.text}
          </Grid.Col>
        </Grid.Row>
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
    const { from, to, route, fromInputValue, toInputValue} = this.state;
    const markers = [from, to].filter(i=> !isNull(i)).filter(t => isObject(t)).map(x => x.location);
    return (
      <Container>
        <MapContainer>
          <Map google={google} markers={markers} direction onRouteChange={this.onRouteChange}/>
        </MapContainer>
        {route && this.renderRouteInfo(route)}
        <InputsContainer>
          <InputContainer><AddressAutoComplete  initialValue={this.getInitValue(from)} placeholder="Current address" onSelect={this.onFromAddressSelect} /></InputContainer>
          <InputContainer><AddressAutoComplete  initialValue={this.getInitValue(to)} placeholder="Destination address" onSelect={this.onToAddressSelect} /></InputContainer>
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
