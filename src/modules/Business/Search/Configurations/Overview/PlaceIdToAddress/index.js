import React, { Component } from 'react';

class PlaceIdToAddress extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      address: null
    };
    this.geocoder = new this.props.google.maps.Geocoder();
  }
  componentDidMount() {
    const { placeId } = this.props;
    this.placeIdToAddress(this.geocoder, placeId);
  }

  placeIdToAddress = (geocoder, placeId) => {
    geocoder.geocode({ placeId: placeId }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.setState({
            address: results[0].formatted_address.replace(', Canada', '')
          });
        }
      }
    });
  };

  render() {
    const { address } = this.state;
    if (!address) {
      return null;
    }
    return <span>{address}</span>;
  }
}

export default PlaceIdToAddress;
