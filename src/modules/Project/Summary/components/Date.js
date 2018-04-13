import React from 'react';
import moment from 'moment';
import { Heading } from '../../../../globalComponents/Typography';
import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../Styled';

const Date = ({ date }) => {
  const { pickUpDate } = date;
  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Date
        </Heading>
      </SectionHeader>
      <SectionBody>
        <SectionBodyItem>
          <SectionBodyItemLabel>Pick-up dates</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {pickUpDate.map(
              d => (<p>{ moment(d).format('MMMM, D, YYYY') }</p>)
            )}
          </SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    </Section>
  );
};

export default Date;
