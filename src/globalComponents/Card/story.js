import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Card from '../../globalComponents/Card';
import Map from '../Map';
import Button from '../Form/Button';

const BasicCard = () => (
  <div style={{margin: '0 auto', padding: '200px 0', width: '200px'}}>
    <Card>
      <p>Hello world</p>
    </Card>
  </div>
);

const CardWithMap = () => {
  const withDirection = [{
    lat: 49.2812054,
    lng: -123.11837050000003
  },
  {
    lat: 49.204811,
    lng: -122.90685289999999
  }];
  return (
    <div style={{margin: '0 auto', padding: '200px 0', width: '376px'}}>
      <Card
        primaryAction={<Button small>Choose</Button>}
      >
          <Map
            style={{ height: 225, width: '100%' }}
            google={window.google}
            markers={withDirection}
            mapOptions={{mapTypeControl: false, draggable: false, fullscreenControl: false, streetViewControl: false, zoomControl: false }}
            direction
          />
      </Card>
    </div>
  );
};


const CardStory = storiesOf('Global/Data Display/Card', module)
  .add('basic card', BasicCard)
  .add('card with map', CardWithMap);

export default CardStory;
