import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Map from '../../globalComponents/Map';

const MapDemo = () => (
  <div style={{width: '800px', height: '600px', border: '1px solid black'}}>
    <Map
      google={window.google}
      lat={number('lat',37.774929)}
      lng={number('lng',-122.419416)}
      zoom={number('zoom',11)}
    />
  </div>
);


const MapStory = storiesOf('Global/Map', module)
.addDecorator(withKnobs)
.add('basic map', withInfo('Basic usage')(MapDemo));

export default MapStory;
