import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import GooglePlacePhoto from './';

const GooglePlacePhotoDemo = () => {
  const placeId = select('placeId', ['ChIJs0-pQ_FzhlQRi_OBm-qWkbs', 'ChIJpTvG15DL1IkRd8S0KlBVNTI'])
  return (
    <div style={{ margin: '0 auto', padding: '200px 0', width: '800px' }}>
    <GooglePlacePhoto
      placeId={placeId}
      google={window.google}
      maxWidth={600}
    />
  </div>
  );
}

const IconStory = storiesOf('Global/Data Display/GooglePlacePhoto', module)
.addDecorator(withKnobs)
.add(
  'Demo',
  GooglePlacePhotoDemo
);

export default IconStory;
