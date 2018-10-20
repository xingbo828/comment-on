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

const PickUp = ({ pickUp: { detail }, isValid, editPath, setValidationStatus }) => {
  setValidationStatus('PickUp', isValid)
  const renderInner = (detail, isValid) => {
    if (!isValid) {
      return (
        <SectionInvalid>Invalid Pick Up configuration.</SectionInvalid>
      );
    }
    const { residenceType, parkingLocation, pickUpJunkRemoval, pickUpAccess } = detail;
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
          <SectionBodyItemLabel>Pick-up parking location</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {parkingLocation}
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
              : `${pickUpAccess.split('|').map(w => w.trim())[1]} flights of stairs`}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>Pick-up junk removal</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {pickUpJunkRemoval}
          </SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    );
  };

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Pick Up
        </Heading>
        <SectionHeaderEditLink
          to={{
            pathname: `${editPath}/pickup`,
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

export default PickUp;
