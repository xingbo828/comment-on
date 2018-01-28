import React from 'react';
import Card from '../../../../globalComponents/Card';
import Map from '../../../../globalComponents/Map';
import Badge from '../../../../globalComponents/Badge';
// import Grid from '../../../../globalComponents/Grid';
import { CardMeta, CardMetaItemProjectName, CardMetaItemStatus } from './Styled';


const MoveCard = ({ project,  unreads, navToProject}) => {
  const { addresses: { pickUpAddress, deliveryAddress }} = project.configuration;
  const direction = [
    {
      placeId: pickUpAddress

    },
    {
      placeId: deliveryAddress
    }
  ];
  const status = project.status !== 'complete' ? 'In Progress': 'Complete';

  const name = project.configuration.projectName;

  return (
      <Card onClick={navToProject}>
        <Badge count={unreads} offsetY={-8} scale={1.2}>
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
            <CardMeta>
              <CardMetaItemProjectName>{name}</CardMetaItemProjectName>
              <CardMetaItemStatus status={project.status}>{status}</CardMetaItemStatus>
            </CardMeta>
        </Card>
  );
};

export default MoveCard;
