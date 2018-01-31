import React, { Component } from 'react';

class LatLngToAddress extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      address: null
    };
    this.geocoder = new this.props.google.maps.Geocoder();
  }
  componentDidMount() {
    const { lat, lng } = this.props;
    this.convert(this.geocoder, { lat, lng });
  }

  convert = (geocoder, { lat, lng }) => {
    const location = new this.props.google.maps.LatLng({lat, lng});
    geocoder.geocode({ location }, (results, status) => {
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
    const { lat, lng, google, ...rest } = this.props;
    if (!address) {
      return null;
    }
    return <span {...rest}>{address}</span>;
  }
}

export default LatLngToAddress;
