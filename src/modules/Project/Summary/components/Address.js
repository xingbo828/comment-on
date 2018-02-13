import React from 'react';
import { Heading } from '../../../../globalComponents/Typography';
import LatLngToAddress from '../../../../globalComponents/LatLngToAddress';
import RouteToDistance from './RouteToDistance';
import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../Styled';

const Address = ({ addresses }) => {
  const { pickUpAddress, deliveryAddress } = addresses;
    return (
      <Section>
        <SectionHeader>
          <Heading wrapperTag="h2" size="sm">
            Location
          </Heading>
        </SectionHeader>
        <SectionBody>
          <SectionBodyItem>
            <SectionBodyItemLabel>Pick-up address</SectionBodyItemLabel>
            <SectionBodyItemContent>
              <LatLngToAddress
                google={window.google}
                {...pickUpAddress}
              />
            </SectionBodyItemContent>
          </SectionBodyItem>
          <SectionBodyItem>
            <SectionBodyItemLabel>Delivery address</SectionBodyItemLabel>
            <SectionBodyItemContent>
              <LatLngToAddress
                google={window.google}
                {...deliveryAddress}
              />
            </SectionBodyItemContent>
          </SectionBodyItem>
          <SectionBodyItem>
            <SectionBodyItemLabel>Estimate distance</SectionBodyItemLabel>
            <SectionBodyItemContent>
              <RouteToDistance
                google={window.google}
                from={pickUpAddress}
                to={deliveryAddress}
              />
            </SectionBodyItemContent>
          </SectionBodyItem>
        </SectionBody>
      </Section>
    );
};

export default Address;
