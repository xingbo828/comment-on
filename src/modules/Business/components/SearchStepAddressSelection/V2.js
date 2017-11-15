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
  InputsContainer,
  InputContainer
} from './V2Styled';

class AddressSelection extends Component {
constructor(props) {
  super(props);
  this.state = {
    from: props.from,
    to: props.to,
    route: null,
    fromInputValue: '',
    toInputValue: ''
  };
}

  onFromAddressSelect = (geo) => {
    this.setState({
      from : {
        placeId: geo.placeId
      }
    });
  }

  onToAddressSelect = (geo) => {
    this.setState({
      to : {
        placeId: geo.placeId
      }
    });
  };

  onRouteChange = (result) => {
    this.setState({
      route: result.routes[0].legs[0],
      fromInputValue: result.routes[0].legs[0].start_address,
      toInputValue: result.routes[0].legs[0].end_address,
    });
    const { from, to } = this.state;
    this.props.onChange({
      from,
      to
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
    const { from, to, route, fromInputValue, toInputValue} = this.state;
    const markers = [from, to].filter(i=> !isNull(i));
    return (
      <Container>
        <MapContainer>
          <Map google={google} markers={markers} direction onRouteChange={this.onRouteChange}/>
        </MapContainer>
        {route && this.renderRouteInfo(route)}
        <InputsContainer>
          <InputContainer><AddressAutoComplete  initialValue={fromInputValue} placeholder="Current address" onSelect={this.onFromAddressSelect} /></InputContainer>
          <InputContainer><AddressAutoComplete  initialValue={toInputValue} placeholder="Destination address" onSelect={this.onToAddressSelect} /></InputContainer>
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
