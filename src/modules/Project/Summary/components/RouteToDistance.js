import React, { Component } from 'react';

class RouteToDistance extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      distance: null
    };
    this.directionsService = new this.props.google.maps.DirectionsService();
  }
  componentDidMount() {
    const { from, to } = this.props;
    this.routeToDistance(this.directionsService, from, to);
  }

  routeToDistance = (directionsService, from, to) => {
    const fromLocation = new this.props.google.maps.LatLng(from);
    const toLocation = new this.props.google.maps.LatLng(to);
    const request = {
      origin: { location: fromLocation },
      destination: { location: toLocation },
      travelMode: 'DRIVING'
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.setState(() => ({
          distance: result.routes[0].legs[0].distance.text
        }));
      }
    });

  };


  render() {
    const { distance } = this.state;
    if (!distance) {
      return null;
    }
    return (
      <span>{distance}</span>
    );
  }
}


export default RouteToDistance;
