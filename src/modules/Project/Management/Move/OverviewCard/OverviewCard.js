import React from 'react';
import Card from '../../../../../globalComponents/Card';
import Map from '../../../../../globalComponents/Map';
import Icon from '../../../../../globalComponents/Icon';
import LatLngToAddress from '../../../../../globalComponents/LatLngToAddress';
import {
  OverviewCardContainer,
  OverviewCardMeta,
  OverviewCardMetaItem,
  OverviewCardMetaItemIcon
} from './Styled';

const OverviewCard = ({ configuration, history, projectId }) => {
  const {
    addresses: { pickUpAddress, deliveryAddress },
  } = configuration;
  const direction = [
    pickUpAddress,
    deliveryAddress
  ];

  const navToProjectSummary = () => {
    history.push({
      pathname: `/projects/${projectId}/summary`
    });

  };
  return (
    <OverviewCardContainer>
      <Card onClick={navToProjectSummary}>
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
        <OverviewCardMeta>
          <OverviewCardMetaItem>
            <OverviewCardMetaItemIcon>
              <Icon icon="circle-o" />
            </OverviewCardMetaItemIcon>
              <LatLngToAddress
                {...pickUpAddress}
                google={window.google}
              />
          </OverviewCardMetaItem>
          <OverviewCardMetaItem>
            <OverviewCardMetaItemIcon>
              <Icon icon="map-marker" />
            </OverviewCardMetaItemIcon>
              <LatLngToAddress
                {...deliveryAddress}
                google={window.google}
              />
          </OverviewCardMetaItem>
        </OverviewCardMeta>
      </Card>
    </OverviewCardContainer>
  );
};

export default OverviewCard;
