import React, { Component } from 'react';
import { array, func, bool, number, object } from 'prop-types';
import isEqual from 'lodash/isEqual';
import first from 'lodash/first';
import has from 'lodash/has';
import last from 'lodash/last';
import MapContainer from './Styles';


const defaultMapConfig = {
  streetViewControl: false,
  mapTypeControl: false
};
class Map extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      !isEqual(this.props.markers, nextProps.markers) ||
      this.props.zoom !== nextProps.zoom
    );
  }

  async componentDidMount() {
    const { google, markers, zoom, direction, onRouteChange } = this.props;
      this.placeIdConverter = this._placeIdToAddress(new google.maps.Geocoder());
      const processedMarkers = await this.convertMarkersFromPlaceIdToAddress(markers, this.placeIdConverter);
      this.renderMap(
        this.mapContainer,
        google,
        processedMarkers,
        zoom,
        direction,
        onRouteChange
      );
  }

  async componentWillUpdate(nextProps) {
    const { google, markers, zoom, direction, onRouteChange } = nextProps;
    const processedMarkers = await this.convertMarkersFromPlaceIdToAddress(markers, this.placeIdConverter);
    this.renderMap(
      this.mapContainer,
      google,
      processedMarkers,
      zoom,
      direction,
      onRouteChange
    );
  }

  _placeIdToAddress = (geocoder) => (markerWithPlaceId) => {
    return new Promise((resolve, reject)=> {
      geocoder.geocode(markerWithPlaceId, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            resolve(Object.assign({}, markerWithPlaceId, {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}));
          }
        }
        reject(status)
      });
    });
  }

  convertMarkersFromPlaceIdToAddress = (markers, converter) => {
    const markerPromises = markers.map(marker => {
      if(has(marker, 'placeId')) {
        return converter(marker);
      }
      return Promise.resolve(marker);
    });

    return Promise.all(markerPromises);
  }



  renderSingleMarker = (container, google, marker, zoom) => {
    const maps = google.maps;
    const center = new maps.LatLng(marker.lat, marker.lng);
    const map = new maps.Map(container, {
      zoom: zoom,
      center,
      ...defaultMapConfig
    });
    new google.maps.Marker({
      position: center,
      label: marker.label,
      map
    });
  };

  renderMultipleMarkers = (container, google, markers) => {
    const bounds = new google.maps.LatLngBounds();
    const maps = google.maps;
    const map = new maps.Map(container, defaultMapConfig);
    markers.map(m => {
      const markerPos = new maps.LatLng(m.lat, m.lng);
      bounds.extend(markerPos);
      return new google.maps.Marker({
        position: markerPos,
        label: m.label,
        map
      });
    });
    map.fitBounds(bounds);
  };

  renderRoute = (container, google, markers, onRouteChange) => {
    const maps = google.maps;
    const map = new maps.Map(container, defaultMapConfig);
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    const from = first(markers);
    const to = last(markers);
    const fromPos = new maps.LatLng(from.lat, from.lng);
    const toPos = new maps.LatLng(to.lat, to.lng);
    const waypoints = markers
      .filter((m, index) => index !== 0 && index !== markers.length - 1)
      .map(marker => ({
        location: new maps.LatLng(marker.lat, marker.lng),
        stopover: false
      }));

    const request = {
      origin: fromPos,
      destination: toPos,
      travelMode: 'DRIVING',
      waypoints
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
    new maps.Map(container, {
      zoom: 9,
      center,
      ...defaultMapConfig
    });
  };

  renderMap = (container, google, markers, zoom, direction, onRouteChange) => {
    if (markers.length === 0) {
      this.renderDefaultMap(container, google);
    } else if (markers.length === 1) {
      this.renderSingleMarker(container, google, markers[0], zoom);
    } else if (direction && markers.length >= 2) {
      this.renderRoute(container, google, markers, onRouteChange);
    } else {
      this.renderMultipleMarkers(container, google, markers);
    }
  };

  render() {
    return (
      <MapContainer
        innerRef={c => {
          this.mapContainer = c;
        }}
      />
    );
  }
}

Map.propTypes = {
  markers: array,
  zoom: number,
  google: object.isRequired,
  onRouteChange: func,
  direction: bool
};

Map.defaultProps = {
  zoom: 11,
  onRouteChange: () => {},
  direction: false
};

export default Map;
