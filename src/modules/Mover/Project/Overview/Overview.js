import React from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import Grid from '../../../../globalComponents/Grid';
import Layout from '../../../../globalComponents/Layout';
import { Heading, Paragraph } from '../../../../globalComponents/Typography';
import { Button } from '../../../../globalComponents/Form';
import Icon from '../../../../globalComponents/Icon';
import PlaceIdToAddress from '../../../../globalComponents/GooglePlaceIdToAddress';
import RouteToDistance from './RouteToDistance';
import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../../../Project/Configurations/Move/Overview/Styled';
import { MOVING_SEARCH_TIME_RANGE } from '../../../../constants';

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const MoverProjectOverview = ({
  overview: { overviewData },
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
          {deliveryDate !== 'sameDayDelivery' && <SectionBodyItem>
            <SectionBodyItemLabel>Delivery time</SectionBodyItemLabel>
            <SectionBodyItemContent>
              {mappedDeliveryTime && mappedDeliveryTime.label}
            </SectionBodyItemContent>
          </SectionBodyItem>}
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
    if (!notes) {
      return null;
    }
    return (<Section noBorder>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Customer notes
        </Heading>
      </SectionHeader>
      <SectionBody>
        <Paragraph>{notes}</Paragraph>
      </SectionBody>
    </Section>);
  };

  return (
    <Grid.Container>
      <FormHeading>
        <Heading wrapperTag="h1">{overviewData.owner.displayName}</Heading>
      </FormHeading>
      <Form onSubmit={handleReply}>
        <FormInner>
          {renderAddressSection(overviewData.configuration.addresses)}
          {renderdateTimeSection(overviewData.configuration.dateTime)}
          {renderLogistics(overviewData.configuration.logistics)}
          {renderItemsSection(overviewData.configuration.items)}
          {renderAdditionalNoteSection(
            overviewData.configuration.additionalNotes
          )}
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right', marginLeft: '1rem' }}
            type="submit"
            primary
          >
            Reply <Icon icon="reply" />
          </Button>
          <Button
            onClick={handleDecline}
            style={{ float: 'right' }}
            ghost
            danger
          >
            Decline <Icon icon="times" />
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default MoverProjectOverview;
