import React from 'react';
import Card from '../../../../globalComponents/Card';
import Map from '../../../../globalComponents/Map';
import Badge from '../../../../globalComponents/Badge';
import Grid from '../../../../globalComponents/Grid';
import {CardContainer} from './Styled';

const MoveCard = ({ project }) => {
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
      <Badge count={7}>
          <Map
            style={{ height: 225, width: '100%' }}
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
