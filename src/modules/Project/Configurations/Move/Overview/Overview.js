import React from 'react';
import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';
import { Heading, Paragraph } from '../../../../../globalComponents/Typography';
import { Button, SubLabel, TextArea } from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
import PlaceIdToAddress from '../../../../../globalComponents/GooglePlaceIdToAddress';
import { MOVING_SEARCH_TIME_RANGE } from '../../../../../constants';
import {
  Section,
  SectionHeader,
  SectionHeaderEditLink,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent,
  SectionInvalid
} from './Styled';

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const ConfigurationOverview = ({
  setAdditionalNotes,
  additionalNotes,
  addresses: rootAddresses,
  dateTime,
  logistics,
  items,
  validators,
  handleSubmit,
  goBack
}) => {
  const areFieldsValidate = (addresses, dateTime, logistics, validators) => {
    const isValid =
      validators.addressesValidator(addresses) &&
      validators.dateTimeValidator(dateTime) &&
      validators.logisticsValidator(logistics);
    return isValid;
  };

  const renderAddressSection = (rootAddresses, validator) => {
    const renderInner = (rootAddresses, validator) => {
      if (!validator(rootAddresses.addresses)) {
        return <SectionInvalid>Invalid address configuration.</SectionInvalid>;
      }
      const { addresses: { pickUpAddress, deliveryAddress } } = rootAddresses;
      return (
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
              pathname: '/project/configurations/move/address',
              fromOverview: true
            }}
          >
            Edit
          </SectionHeaderEditLink>
        </SectionHeader>
        {renderInner(rootAddresses, validator)}
      </Section>
    );
  };

  const renderdateTimeSection = (dateTime, validator) => {
    const renderInner = (dateTime, validator) => {
      if (!validator(dateTime)) {
        return (
          <SectionInvalid>Invalid date & time configuration.</SectionInvalid>
        );
      }
      const { pickUpDate, pickUpTime, deliveryDate, deliveryTime } = dateTime;
      const mappedPickUpTime = MOVING_SEARCH_TIME_RANGE.find(
        i => i.value === pickUpTime
      );
      const mappedDeliveryTime = MOVING_SEARCH_TIME_RANGE.find(
        i => i.value === deliveryTime
      );

      return (
        <SectionBody>
          <SectionBodyItem>
            <SectionBodyItemLabel>Pick-up date</SectionBodyItemLabel>
            <SectionBodyItemContent>
              {pickUpDate.format('MMMM, D, YYYY')}
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
              {isObject(deliveryDate)
                ? deliveryDate.format('MMMM, D, YYYY')
                : startCase(deliveryDate)}
            </SectionBodyItemContent>
          </SectionBodyItem>
          {deliveryDate !== 'sameDayDelivery' && <SectionBodyItem>
            <SectionBodyItemLabel>Delivery time</SectionBodyItemLabel>
            <SectionBodyItemContent>
              {mappedDeliveryTime && mappedDeliveryTime.label}
            </SectionBodyItemContent>
          </SectionBodyItem>}
        </SectionBody>
      );
    };

    return (
      <Section>
        <SectionHeader>
          <Heading wrapperTag="h2" size="sm">
            Date & Time
          </Heading>
          <SectionHeaderEditLink
            to={{ pathname: '/project/configurations/move/date', fromOverview: true }}
          >
            Edit
          </SectionHeaderEditLink>
        </SectionHeader>
        {renderInner(dateTime, validator)}
      </Section>
    );
  };

  const renderLogistics = (logistics, validator) => {
    const renderInner = (logistics, validator) => {
      if (!validator(logistics)) {
        return (
          <SectionInvalid>Invalid logistics configuration.</SectionInvalid>
        );
      }
      const { residenceType, deliveryAccess, ableToAssist } = logistics;
      return (
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
            <SectionBodyItemLabel>
              Delivery location access
            </SectionBodyItemLabel>
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
              pathname: '/project/configurations/move/logistics',
              fromOverview: true
            }}
          >
            Edit
          </SectionHeaderEditLink>
        </SectionHeader>
        {renderInner(logistics, validator)}
      </Section>
    );
  };

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

  const renderItemsSection = items => {
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
          <SectionHeaderEditLink
            to={{ pathname: '/project/configurations/move/items', fromOverview: true }}
          >
            Edit
          </SectionHeaderEditLink>
        </SectionHeader>
        {renderInner(items)}
      </Section>
    );
  };

  const renderAdditionalNoteSection = (notes, onChange) => {
    const onChangeHandler = (e) => {
      onChange(e.target.value);
    };

    const input = {
      value: notes,
      onChange: onChangeHandler
    };
    return (
      <Section noBorder>
        <SectionHeader>
          <Heading wrapperTag="h2" size="sm">
            Additional Notes
          </Heading>
        </SectionHeader>
        <SubLabel>
            Please do not enter your personal contact information.
          </SubLabel>
        <SectionBody>
          <TextArea input={input} />
        </SectionBody>
      </Section>
    );
  };

  return (
    <Grid.Container>
      <FormHeading>
        <Heading wrapperTag="h1">Overview</Heading>
        <Paragraph>Here is an overview of your move.</Paragraph>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          {renderAddressSection(rootAddresses, validators.addressesValidator)}
          {renderdateTimeSection(dateTime, validators.dateTimeValidator)}
          {renderLogistics(logistics, validators.logisticsValidator)}
          {renderItemsSection(items)}
          {renderAdditionalNoteSection(additionalNotes, setAdditionalNotes)}
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={
              !areFieldsValidate(
                rootAddresses.addresses,
                dateTime,
                logistics,
                validators
              )
            }
          >
            Submit <Icon icon="arrow-right" />
          </Button>
          <Button style={{ float: 'left' }} ghost onClick={goBack}>
            <Icon icon="arrow-left" /> Back
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default ConfigurationOverview;
