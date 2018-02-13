import React from 'react';

import { Heading, Paragraph } from '../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionBody
} from '../Styled';

const AdditionalInfo = ({ notes }) => {
  return (
    <Section noBorder>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Customer notes
        </Heading>
      </SectionHeader>
      <SectionBody>
        <Paragraph>{notes || 'No customer notes'}</Paragraph>
      </SectionBody>
    </Section>
  );
};

export default AdditionalInfo;
