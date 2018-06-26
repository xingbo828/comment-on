import React from 'react';
import capitalize from 'lodash/capitalize';

import { Heading } from '../../../../../../globalComponents/Typography';

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

const Logistics = ({ detail, isValid }) => {
  const renderInner = (detail, isValid) => {
    if (!isValid) {
      return (
        <SectionInvalid>Invalid logistics configuration.</SectionInvalid>
      );
    }
    const { residenceType, deliveryAccess, pickUpAccess } = detail;
    return (
      <SectionBody>
        <SectionBodyItem border>
          <SectionBodyItemLabel>Pick-up residence type</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {capitalize(residenceType.split(' | ')[0])}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem border>
          <SectionBodyItemLabel>Pick-up residence size</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {residenceType.split(' | ')[0] === 'apartment' ? '' : 'Up to'}{' '}
            {residenceType.split(' | ')[1]}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem border>
          <SectionBodyItemLabel>Pick-up location access</SectionBodyItemLabel>
          <SectionBodyItemContent>
          {pickUpAccess.startsWith('elevator') || pickUpAccess.startsWith('main-floor')
              ? pickUpAccess
                  .split('/')
                  .map(w => capitalize(w).replace('-', ' '))
                  .join(' / ')
              : `${pickUpAccess.split('|').map(w => w.trim())[1]} stairs`}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem >
          <SectionBodyItemLabel>
            Delivery location access
          </SectionBodyItemLabel>
          <SectionBodyItemContent>
            {deliveryAccess.startsWith('elevator') || deliveryAccess.startsWith('main-floor')
              ? deliveryAccess
                  .split('/')
                  .map(w => capitalize(w).replace('-', ' '))
                  .join(' / ')
              : `${deliveryAccess.split('|').map(w => w.trim())[1]} stairs`}
          </SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    );
  };

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Logistics
        </Heading>
        <SectionHeaderEditLink
          to={{
            pathname: '/projects/configurations/move/logistics',
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

export default Logistics;
