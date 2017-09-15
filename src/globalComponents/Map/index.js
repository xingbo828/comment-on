import React, { Component } from 'react';
import { number, object } from 'prop-types';
import {
  MapContainer
} from './Styles';

class Map extends Component {
  componentDidMount() {
    const { google, lat, lng, zoom } = this.props;
    this.renderMap(this.mapContainer, google, lat, lng, zoom);
  }

  componentWillReceiveProps(nextProps) {
    const { google, lat, lng, zoom } = nextProps;
    this.renderMap(this.mapContainer, google, lat, lng, zoom);
  }

  renderMap = (container, google, lat, lng, zoom) => {
    const maps = google.maps;
    const center = new maps.LatLng(lat, lng);
    const map = new maps.Map(container, {
      center,
      zoom: zoom,
      streetViewControl: false
    });
    const marker = new google.maps.Marker({
      position: center
    });
    marker.setMap(map);
  }

  render() {
    return (
      <MapContainer innerRef={(c) => { this.mapContainer = c; }} />
    );
  }
}

Map.propTypes = {
  lat: number.isRequired,
  lng: number.isRequired,
  zoom: number,
  google: object.isRequired
};

Map.defaultProps = {
  zoom: 11
};

export default Map;
