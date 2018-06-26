import React from 'react';

import { Heading } from '../../../../../../globalComponents/Typography';
import LatLngToAddress from '../../../../../../globalComponents/LatLngToAddress';

import {
  Section,
  SectionHeader,
  SectionHeaderEditLink,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent,
  SectionInvalid
} from '../Styled';

const Address = ({ addresses: { detail }, isValid, editPath }) => {
  const renderInner = ({ pickUpAddress, deliveryAddress }, isValid) => {
    if (!isValid) {
      return <SectionInvalid>Invalid address configuration.</SectionInvalid>;
    }
    return (
      <SectionBody>
        <SectionBodyItem border>
          <SectionBodyItemLabel>Pick-up address</SectionBodyItemLabel>
          <SectionBodyItemContent>
            <LatLngToAddress
              google={window.google}
              lat={pickUpAddress.lat}
              lng={pickUpAddress.lng}
            />
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>Delivery address</SectionBodyItemLabel>
          <SectionBodyItemContent>
            <LatLngToAddress
              google={window.google}
              lat={deliveryAddress.lat}
              lng={deliveryAddress.lng}
            />
          </SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    );
  };

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Addresses
        </Heading>
        <SectionHeaderEditLink
          to={{
            pathname: `${editPath}/address`,
            fromOverview: true
          }}
        >
          Edit
        </SectionHeaderEditLink>
      </SectionHeader>
      {renderInner(detail, isValid)}
    </Section>
  );

};

export default Address;
