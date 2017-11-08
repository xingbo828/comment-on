import React, { Component } from 'react';
import { arrayOf, func, shape, string, number, object } from 'prop-types';
import isEqual from 'lodash/isEqual';
import {
  MapContainer
} from './Styles';

class Map extends Component {

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.markers, nextProps.markers);
  }

  componentDidMount() {
    const { google, markers, zoom, onRouteChange} = this.props;
    this.renderMap(this.mapContainer, google, markers, zoom, onRouteChange);
  }

  componentWillUpdate(nextProps) {
    const { google, markers, zoom, onRouteChange } = nextProps;
    this.renderMap(this.mapContainer, google, markers, zoom, onRouteChange);
  }

  renderSingleMarker = (container, google, marker, zoom) => {
    const maps = google.maps;
    const center = new maps.LatLng(marker.lat, marker.lng);
    const map = new maps.Map(container, {
      zoom: zoom,
      streetViewControl: false,
      center
    });
    new google.maps.Marker({
      position: center,
      label: marker.label,
      map
    });
  }

  renderMultipleMarkers = (container, google, markers) => {
    const bounds = new google.maps.LatLngBounds();
    const maps = google.maps;
    const map = new maps.Map(container, {
      streetViewControl: false
    });
    const mapMarkers = markers.map(m => {
      const markerPos = new maps.LatLng(m.lat, m.lng);
      bounds.extend(markerPos);
      return new google.maps.Marker({
        position: markerPos,
        label: m.label,
        map
      });
    });
    map.fitBounds(bounds);
  }

  renderRoute = (container, google, from, to, onRouteChange) => {
    const maps = google.maps;
    const map = new maps.Map(container, {
      streetViewControl: false
    });
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: "#1d407f",
        strokeWeight: 5,
        strokeOpacity: .8
      }
    });
    directionsDisplay.setMap(map);
    const fromPos = new maps.LatLng(from.lat, from.lng);
    const toPos = new maps.LatLng(to.lat, to.lng);
    const request = {
      origin: fromPos,
      destination: toPos,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status === 'OK') {
        onRouteChange(result);
        directionsDisplay.setDirections(result);
      }
    });
  };

  renderDefaultMap = (container, google) => {
    const maps = google.maps;
    const center = new maps.LatLng(49.246292, -123.116226);
    const map = new maps.Map(container, {
      zoom: 9,
      streetViewControl: false,
      center
    });
  };

  renderMap = (container, google, markers, zoom, onRouteChange) => {
    if(markers.length === 0) {
      this.renderDefaultMap(container, google);
    }
    else if(markers.length === 1) {
      this.renderSingleMarker(container, google, markers[0], zoom);
    }
    else if(markers.length === 2) {
      this.renderRoute(container, google, markers[0], markers[1], onRouteChange);
    }
    else {
      this.renderMultipleMarkers(container, google, markers);
    }
  }

  render() {
    return (
      <MapContainer innerRef={(c) => { this.mapContainer = c; }} />
    );
  }
}

Map.propTypes = {
  markers: arrayOf(shape({
    lat: number.isRequired,
    lng: number.isRequired,
    label: string
  })),
  zoom: number,
  google: object.isRequired,
  onRouteChange: func
};

Map.defaultProps = {
  zoom: 11,
  onRouteChange: () => {}
};

export default Map;
