import React, { Component } from 'react';
import { string, object, func, number } from 'prop-types';
import isNull from 'lodash/isNull';
import Map from '../../../../globalComponents/Map';
import { Paragraph } from '../../../../globalComponents/Typography';
import Icon from '../../../../globalComponents/Icon';
import AddressAutoComplete from '../../../../globalComponents/Form/AddressAutoComplete';
import Grid from '../../../../globalComponents/Grid';
import {
  Container,
  MapContainer,
  RouteInfoContainer,
  InputsContainer
} from './V2Styled';

class AddressSelection extends Component {

  state = {
    from:null,
    to: null,
    route: null
  };

  onFromAddressSelect = (geo) => {
    this.setState({
      from : {
        lat: geo.location.lat,
        lng: geo.location.lng,
      }
    });
  }

  onToAddressSelect = (geo) => {
    this.setState({
      to : {
        lat: geo.location.lat,
        lng: geo.location.lng,
      }
    });
  };

  onRouteChange = (result) => {
    this.setState({
      route: result.routes[0].legs[0]
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

  render() {
    const { google } = this.props;
    const { from, to, route } = this.state;
    const markers = [from, to].filter(i=> !isNull(i));
    return (
      <Container>
        <MapContainer>
          <Map google={google} markers={markers} onRouteChange={this.onRouteChange}/>
        </MapContainer>
        {route && this.renderRouteInfo(route)}
        <InputsContainer>
          <AddressAutoComplete placeholder="From" onSelect={this.onFromAddressSelect} />
          <AddressAutoComplete placeholder="To" onSelect={this.onToAddressSelect} />
        </InputsContainer>
      </Container>
    );
  }
}

export default AddressSelection;
