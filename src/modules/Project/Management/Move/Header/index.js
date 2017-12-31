import React from 'react';
import PlaceIdToAddress from '../../../../../globalComponents/GooglePlaceIdToAddress';
import {
  ManagementHeaderContainer,
  HeaderAddressesContainer,
  HeaderAddress,
  HeaderAddressContent,
  HeaderDeliverAddressContent,
  HeaderStatus,
  HeaderStatusContent,
  HeaderLabel
} from './Styled';


const ManagementHeader = ({
  projectData
}) => {
  return (
    <ManagementHeaderContainer>
      <HeaderAddressesContainer>
      <HeaderAddress>
        <HeaderLabel>Pick up</HeaderLabel>
        <HeaderAddressContent>
          <PlaceIdToAddress google={window.google} placeId={projectData.configuration.addresses.pickUpAddress}/>
        </HeaderAddressContent>
      </HeaderAddress>
      <HeaderAddress>
        <HeaderLabel>Delivery</HeaderLabel>
        <HeaderDeliverAddressContent>
          <PlaceIdToAddress google={window.google} placeId={projectData.configuration.addresses.deliveryAddress}/>
        </HeaderDeliverAddressContent>
      </HeaderAddress>
      </HeaderAddressesContainer>
      <HeaderStatus>
        <HeaderLabel>Status</HeaderLabel>
        <HeaderStatusContent>Pending</HeaderStatusContent>
      </HeaderStatus>
    </ManagementHeaderContainer>
  );
};

export default ManagementHeader;
