import React from 'react';
import capitalize from 'lodash/capitalize';
import { Heading } from '../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../Styled';

const Logistics = ({ logistics: { residenceType, deliveryAccess, ableToAssist }}) => (
  <Section>
    <SectionHeader>
      <Heading wrapperTag="h2" size="sm">
        Logistics
      </Heading>
    </SectionHeader>
    <SectionBody>
      <SectionBodyItem>
        <SectionBodyItemLabel>Pick-up residence type</SectionBodyItemLabel>
        <SectionBodyItemContent>
          {capitalize(residenceType.split(' | ')[0])}
        </SectionBodyItemContent>
      </SectionBodyItem>
      <SectionBodyItem>
        <SectionBodyItemLabel>Pick-up residence size</SectionBodyItemLabel>
        <SectionBodyItemContent>
          {residenceType.split(' | ')[0] === 'apartment' ? '' : 'Up to'}{' '}
          {residenceType.split(' | ')[1]}
        </SectionBodyItemContent>
      </SectionBodyItem>
      <SectionBodyItem>
        <SectionBodyItemLabel>Delivery location access</SectionBodyItemLabel>
        <SectionBodyItemContent>
          {deliveryAccess.startsWith('elevator')
            ? deliveryAccess
                .split('/')
                .map(w => capitalize(w).replace('-', ' '))
                .join(' / ')
            : `${deliveryAccess.split('|').map(w => w.trim())[1]} stairs`}
        </SectionBodyItemContent>
      </SectionBodyItem>
      <SectionBodyItem>
        <SectionBodyItemLabel>Able to assist</SectionBodyItemLabel>
        <SectionBodyItemContent>
          {capitalize(ableToAssist)}
        </SectionBodyItemContent>
      </SectionBodyItem>
    </SectionBody>
  </Section>
);

export default Logistics;
