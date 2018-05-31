import React from 'react';
// import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';
import { Heading } from '../../../../../globalComponents/Typography';
import { Button, TextArea, TextField, Legend } from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
// import PlaceIdToAddress from '../../../../../globalComponents/GooglePlaceIdToAddress';
import LatLngToAddress from '../../../../../globalComponents/LatLngToAddress';
// import { MOVING_SEARCH_TIME_RANGE } from '../../../../../constants';
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

const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const ConfigurationOverview = ({
  loginStatus,
  setAdditionalNotes,
  setProjectName,
  projectName,
  additionalNotes,
  addresses: rootAddresses,
  date,
  logistics,
  items,
  validators,
  handleSubmit,
  goBack,
  isCompletedProfile,
  isLoggedIn,
  signIn
}) => {
  const areFieldsValidate = (addresses, date, logistics, validators) => {
    const isValid =
      validators.addressesValidator(addresses) &&
      validators.dateValidator(date) &&
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
          <SectionBodyItem border>
            <SectionBodyItemLabel>Pick-up address</SectionBodyItemLabel>
            <SectionBodyItemContent>
              <LatLngToAddress
                google={window.google}
                lat={pickUpAddress.lat}
                lng={pickUpAddress.lng}
              />
            </SectionBodyItemContent>
          </SectionBodyItem>
          <SectionBodyItem>
            <SectionBodyItemLabel>Delivery address</SectionBodyItemLabel>
            <SectionBodyItemContent>
              <LatLngToAddress
                google={window.google}
                lat={deliveryAddress.lat}
                lng={deliveryAddress.lng}
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
              pathname: '/projects/configurations/move/address',
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

  const renderdateSection = (date, validator) => {
    const renderInner = (date, validator) => {
      if (!validator(date)) {
        return (
          <SectionInvalid>Invalid date configuration.</SectionInvalid>
        );
      }
      const { pickUpDate } = date;

      return (
        <SectionBody>
          <SectionBodyItem>
            <SectionBodyItemContent>
              {pickUpDate.map(p => <p key={p}>{p.format('dddd, MMMM, D, YYYY')}</p>)}
            </SectionBodyItemContent>
          </SectionBodyItem>
        </SectionBody>
      );
    };

    return (
      <Section>
        <SectionHeader>
          <Heading wrapperTag="h2" size="sm">
            Pick-up date(s)
          </Heading>
          <SectionHeaderEditLink
            to={{ pathname: '/projects/configurations/move/date', fromOverview: true }}
          >
            Edit
          </SectionHeaderEditLink>
        </SectionHeader>
        {renderInner(date, validator)}
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
      const { residenceType, deliveryAccess, pickUpAccess } = logistics;
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
        {renderInner(logistics, validator)}
      </Section>
    );
  };

  const renderItemsSubSection = (v, isLast=false) => {
    const data = Object.keys(v)
    .filter(f => v[f] !== '0' || v[f]=== '5+');
    return data
      .map((i, index)=> {
        return (
          <SectionBodyItem key={i} border={!isLast && (index <= data.length)}>
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
        isEmpty(items.specialCare) &&
        isEmpty(items.appliances) &&
        isEmpty(items.decore)
      ) {
        return 'No items';
      }

      return (
        <SectionBody>
          {renderItemsSubSection(items.specialCare)}
          {renderItemsSubSection(items.appliances)}
          {renderItemsSubSection(items.decore, true)}
          {items.otherItems && <SectionBodyItem>
            <SectionBodyItemLabel>
              Other items
            </SectionBodyItemLabel>
            <SectionBodyItemContent>{items.otherItems}</SectionBodyItemContent>
          </SectionBodyItem>}
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
            to={{ pathname: '/projects/configurations/move/items', fromOverview: true }}
          >
            Edit
          </SectionHeaderEditLink>
        </SectionHeader>
        {renderInner(items)}
      </Section>
    );
  };

  const renderProjectName = (name, onChange) => {
    const onChangeHandler = (e) => {
      onChange(e.target.value);
    };

    const input = {
      value: name,
      onChange: onChangeHandler
    };
    return (
      <div>
        <Legend>Enter a name for your project</Legend>
        <TextField
          input={input}
          label="Project name"
        />
      </div>
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
      <div>
        <Legend>Provide us with any additional notes. This is the place for any additional quetions, concerns or information pertaining to your move you feel we may have missed.</Legend>
        <TextArea
          input={input}
          label="Additional notes"
        />
      </div>
    );
  };
  return (
    <Grid.Container>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <FormFieldSet>
            <Legend>Let's review everything so far. Feel free to go back and make any changes.</Legend>
            {renderAddressSection(rootAddresses, validators.addressesValidator)}
            {renderdateSection(date, validators.dateValidator)}
            {renderLogistics(logistics, validators.logisticsValidator)}
            {renderItemsSection(items)}
          </FormFieldSet>
          <FormFieldSet>
            {renderProjectName(projectName, setProjectName)}
          </FormFieldSet>
          <FormFieldSet>
            {renderAdditionalNoteSection(additionalNotes, setAdditionalNotes)}
          </FormFieldSet>
        </FormInner>
        <FormActions>
          {loginStatus === 'AUTHENTICATED' && isCompletedProfile && <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={
              !areFieldsValidate(
                rootAddresses.addresses,
                date,
                logistics,
                validators
              )
            }
          >
            Find a mover <Icon icon="arrow-right" />
          </Button>}
          {loginStatus === 'NOT_AUTHENTICATED' && <Button
            style={{ float: 'right' }}
            primary
            onClick={signIn}
            disabled={
              !areFieldsValidate(
                rootAddresses.addresses,
                date,
                logistics,
                validators
              )
            }
          >
            Sign in to continue
          </Button>}
          {loginStatus === 'AUTHENTICATED' && !isCompletedProfile && <Button
            style={{ float: 'right' }}
            primary
            onClick={signIn}
            disabled={
              !areFieldsValidate(
                rootAddresses.addresses,
                date,
                logistics,
                validators
              )
            }
          >
            Update profile to continue
          </Button>}
          <Button style={{ float: 'left' }} ghost onClick={goBack}>
            <Icon icon="arrow-left" />Back
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default ConfigurationOverview;
