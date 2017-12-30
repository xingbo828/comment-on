import React from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import Grid from '../../../../globalComponents/Grid';
import { Heading, Paragraph } from '../../../../globalComponents/Typography';
import PlaceIdToAddress from '../../../../globalComponents/GooglePlaceIdToAddress';
import RouteToDistance from './RouteToDistance';
import Progress from './Progress';
import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../../../Project/Configurations/Move/Overview/Styled';

import {
  HeadingContainer,
  HeadingContainerInner,
  SummaryBody,
  SummaryReportContainer,
  SummaryActionFormContainer
} from './Styled';
import { MOVING_SEARCH_TIME_RANGE } from '../../../../constants';

const MoverProjectSummary = ({
  summary: { summaryData },
  handleReply,
  handleDecline
}) => {
  const renderAddressSection = addresses => {
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
              <PlaceIdToAddress
                google={window.google}
                placeId={pickUpAddress}
              />
            </SectionBodyItemContent>
          </SectionBodyItem>
          <SectionBodyItem>
            <SectionBodyItemLabel>Delivery address</SectionBodyItemLabel>
            <SectionBodyItemContent>
              <PlaceIdToAddress
                google={window.google}
                placeId={deliveryAddress}
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

  const renderdateTimeSection = dateTime => {
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

  const renderLogistics = ({ residenceType, deliveryAccess, ableToAssist }) => (
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

  const renderItemsSection = items => {
    const renderItemsSubSection = v => {
      return Object.keys(v)
        .filter(f => v[f] > 0)
        .map(i => {
          return (
            <SectionBodyItem key={i}>
              <SectionBodyItemLabel>
                {capitalize(startCase(i))}
              </SectionBodyItemLabel>
              <SectionBodyItemContent>{v[i]}</SectionBodyItemContent>
            </SectionBodyItem>
          );
        });
    };

    const renderInner = items => {
      if (
        isEmpty(items.speciality) &&
        isEmpty(items.large) &&
        isEmpty(items.medium)
      ) {
        return 'No items';
      }

      return (
        <SectionBody>
          {renderItemsSubSection(items.speciality)}
          {renderItemsSubSection(items.large)}
          {renderItemsSubSection(items.medium)}
        </SectionBody>
      );
    };
    return (
      <Section>
        <SectionHeader>
          <Heading wrapperTag="h2" size="sm">
            Items
          </Heading>
        </SectionHeader>
        {renderInner(items)}
      </Section>
    );
  };

  const renderAdditionalNoteSection = notes => {
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

  return (
    <Grid.Container fluid>
      <HeadingContainer>
        <HeadingContainerInner>
          <Heading wrapperTag="h1">{summaryData.owner.displayName}</Heading>
        </HeadingContainerInner>
      </HeadingContainer>
      <SummaryBody>
        <SummaryActionFormContainer>
          <Progress />
        </SummaryActionFormContainer>
        <SummaryReportContainer>
          {renderAddressSection(summaryData.configuration.addresses)}
          {renderdateTimeSection(summaryData.configuration.dateTime)}
          {renderLogistics(summaryData.configuration.logistics)}
          {renderItemsSection(summaryData.configuration.items)}
          {renderAdditionalNoteSection(
            summaryData.configuration.additionalNotes
          )}
        </SummaryReportContainer>

      </SummaryBody>
    </Grid.Container>
  );
};

export default MoverProjectSummary;
