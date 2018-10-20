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

const Delivery = ({ delivery: { detail }, isValid, editPath, setValidationStatus }) => {
  setValidationStatus('Delivery', isValid)
  const renderInner = (detail, isValid) => {
    if (!isValid) {
      return (
        <SectionInvalid>Invalid Delivery configuration.</SectionInvalid>
      );
    }
    const { residenceType, deliveryAccess } = detail;
    return (
      <SectionBody>
        <SectionBodyItem border>
          <SectionBodyItemLabel>Delivery residence type</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {capitalize(residenceType.split(' | ')[0])}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem border>
          <SectionBodyItemLabel>Delivery residence size</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {residenceType.split(' | ')[0] === 'apartment' ? '' : 'Up to'}{' '}
            {residenceType.split(' | ')[1]}
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
              : `${deliveryAccess.split('|').map(w => w.trim())[1]}  flights of stairs`}
          </SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    );
  };

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Delivery
        </Heading>
        <SectionHeaderEditLink
          to={{
            pathname: `${editPath}/delivery`,
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

export default Delivery;
