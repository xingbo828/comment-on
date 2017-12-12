import React from 'react';

import { storiesOf } from '@storybook/react';
import PlaceIdToAddress from './';

const PlaceIdToAddressDemo = () => (
  <div style={{ margin: '0 auto', padding: '200px 0', width: '800px' }}>
    <span style={{ marginRight: 30 }}>ChIJb4FXnas1K4gRQohGCWVDmjM</span> =>{' '}
    <PlaceIdToAddress
      style={{ marginLeft: 30 }}
      placeId="ChIJb4FXnas1K4gRQohGCWVDmjM"
      google={window.google}
    />
  </div>
);
const IconStory = storiesOf('Global/Data Display/PlaceIdToAddress', module).add(
  'Demo',
  PlaceIdToAddressDemo
);

export default IconStory;
