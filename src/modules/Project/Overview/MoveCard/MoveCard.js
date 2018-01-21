import React from 'react';
import Card from '../../../../globalComponents/Card';
import Map from '../../../../globalComponents/Map';
import Badge from '../../../../globalComponents/Badge';
import Grid from '../../../../globalComponents/Grid';
import moment from 'moment';
import {CardContainer, CardMetaItem} from './Styled';


const MoveCard = ({ project,  navToProject}) => {
  const { addresses: { pickUpAddress, deliveryAddress }, dateTime: {pickUpDate}} = project.configuration;
  const direction = [
    {
      placeId: pickUpAddress

    },
    {
      placeId: deliveryAddress
    }
  ];
  const status = project.status !== 'complete' ? 'In Progress': 'Complete';

  const name = project.configuration.name || `My ${moment(pickUpDate).format('ll')} move`;

  return (
    <Card onClick={navToProject}>
      <Badge count={7} offsetY={-8} scale={1.2}>
          <Map
            style={{ height: 225, width: '100%', display: 'inline-block'}}
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
          <CardMetaItem>{name}</CardMetaItem>
          <CardMetaItem>{status}</CardMetaItem>
      </Card>
  );
};

export default MoveCard;
