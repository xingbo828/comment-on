import React from 'react';
import Card from '../../../../globalComponents/Card';
import Map from '../../../../globalComponents/Map';
import Button from '../../../../globalComponents/Form/Button';
import Grid from '../../../../globalComponents/Grid';
import {CardContainer} from './Styled';

const MoveCard = ({ project }) => {
  const withDirection = [{
    lat: 49.2812054,
    lng: -123.11837050000003
  },
  {
    lat: 49.204811,
    lng: -122.90685289999999
  }];
  return (
    <CardContainer xs={24} sm={24} md={8} lg={8}>
      <Card
        primaryAction={<Button small>Click</Button>}
      >
          <Map
            style={{ height: 225, width: '100%' }}
            google={window.google}
            markers={withDirection}
            zoom={12}
            mapOptions={{draggable: false, fullscreenControl: false }}
            direction
          />
      </Card>
    </CardContainer>
  );
};

export default MoveCard;
