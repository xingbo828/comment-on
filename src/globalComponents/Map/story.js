import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Map from '../../globalComponents/Map';


const singleMarker = [{
  lat: 37.774929,
  lng: -122.419416
}];

const singleMarkerWithPlaceId = [{
  placeId: 'ChIJd8BlQ2BZwokRAFUEcm_qrcA'
}];

const multipleMarkers = [{
  lat: 37.774929,
  lng: -122.419416,
  label: 'A'
},
{
  lat: 36.774929,
  lng: -121.419416,
  label: 'B'
},
{
  lat: 39.774929,
  lng: -120.419416,
  label: 'C'
}];

const withDirection = [{
  lat: 37.774929,
  lng: -122.419416
},
{
  lat: 38.774929,
  lng: -121.419416
}];

const SingleMarkerMapDemo = () => (
  <div style={{width: '800px', height: '600px', border: '1px solid black'}}>
    <Map
      google={window.google}
      markers={singleMarker}
      zoom={number('zoom',11)}
    />
  </div>
);

const SingleMarkerWithPlaceIdMapDemo = () => (
  <div style={{width: '800px', height: '600px', border: '1px solid black'}}>
    <Map
      google={window.google}
      markers={singleMarkerWithPlaceId}
      zoom={number('zoom',11)}
    />
  </div>
);

const DirectionMapDemo = () => (
  <div style={{width: '800px', height: '600px', border: '1px solid black'}}>
    <Map
      google={window.google}
      markers={withDirection}
      direction
    />
  </div>
);

const DirectionWithWayPointsMapDemo = () => (
  <div style={{width: '800px', height: '600px', border: '1px solid black'}}>
    <Map
      google={window.google}
      markers={multipleMarkers}
      direction
    />
  </div>
);

const MultipleMarkerMapDemo = () => (
  <div style={{width: '800px', height: '600px', border: '1px solid black'}}>
    <Map
      google={window.google}
      markers={multipleMarkers}
    />
  </div>
);


const MapStory = storiesOf('Global/Data Display/Map', module)
.addDecorator(withKnobs)
.add('single marker map', withInfo('Map with single marker')(SingleMarkerMapDemo))
.add('single marker with placeid on map', withInfo('placeId marker')(SingleMarkerWithPlaceIdMapDemo))
.add('map with direction', withInfo('Map with direction')(DirectionMapDemo))
.add('map with direction and waypoints', withInfo('Map with direction and Waypoints')(DirectionWithWayPointsMapDemo))
.add('multiple markers map', withInfo('Map with more than 3 markers')(MultipleMarkerMapDemo));
;
export default MapStory;
