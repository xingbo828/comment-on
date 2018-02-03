import React from 'react';
import moment from 'moment';
import startCase from 'lodash/startCase';
import { Heading } from '../../../../globalComponents/Typography';
import { MOVING_SEARCH_TIME_RANGE } from '../../../../constants';
import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../Styled';

const DateTime = ({ dateTime }) => {
  const { pickUpDate, pickUpTime, deliveryDate, deliveryTime } = dateTime;
  const mappedPickUpTime = MOVING_SEARCH_TIME_RANGE.find(
    i => i.value === pickUpTime
  );
  const mappedDeliveryTime = MOVING_SEARCH_TIME_RANGE.find(
    i => i.value === deliveryTime
  );

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Date & Time
        </Heading>
      </SectionHeader>
      <SectionBody>
        <SectionBodyItem>
          <SectionBodyItemLabel>Pick-up date</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {moment(pickUpDate).format('MMMM, D, YYYY')}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>Pick-up time</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {mappedPickUpTime && mappedPickUpTime.label}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>Delivery date</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {deliveryDate === 'sameDayDelivery'
              ? startCase(deliveryDate)
              : moment(deliveryDate).format('MMMM, D, YYYY')}
          </SectionBodyItemContent>
        </SectionBodyItem>
        {deliveryDate !== 'sameDayDelivery' && (
          <SectionBodyItem>
            <SectionBodyItemLabel>Delivery time</SectionBodyItemLabel>
            <SectionBodyItemContent>
              {mappedDeliveryTime && mappedDeliveryTime.label}
            </SectionBodyItemContent>
          </SectionBodyItem>
        )}
      </SectionBody>
    </Section>
  );
};

export default DateTime;
