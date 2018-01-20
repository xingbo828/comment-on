import React from 'react';
import Card from '../../../../globalComponents/Card';
import Map from '../../../../globalComponents/Map';
import Badge from '../../../../globalComponents/Badge';
import Grid from '../../../../globalComponents/Grid';
import {CardContainer} from './Styled';

const MoveCard = ({ project, unreads }) => {
  const { addresses: { pickUpAddress, deliveryAddress } } = project.configuration;
  const direction = [
    {
      placeId: pickUpAddress

    },
    {
      placeId: deliveryAddress
    }
  ];
  return (
    <Card>
      <Badge count={unreads} offsetY={-5}>
          <Map
            style={{ height: 225, width: '100%', display: 'inline-block' }}
            google={window.google}
            markers={direction}
            mapOptions={{
              mapTypeControl: false,
              draggable: false,
              fullscreenControl: false,
              streetViewControl: false,
              zoomControl: false
            }}
            direction
          />
          </Badge>
      </Card>
  );
};

export default MoveCard;
