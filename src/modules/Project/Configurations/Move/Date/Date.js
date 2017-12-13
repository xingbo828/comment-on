import React from 'react';
import isNull from 'lodash/isNull';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';
import DateSelection from './DateSelection';
import SearchStepTimeSelection from './TimeSelection';
import { Heading, Paragraph } from '../../../../../globalComponents/Typography';
import Grid from '../../../../../globalComponents/Grid';
import DeliveryDateSelection from './DeliveryDateSelection';

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const renderDateSelection = ({ input, label }) => {
  return (
    <DateSelection
      label={label}
      value={input.value || undefined}
      onChange={input.onChange}
    />
  );
};

const renderTimeRangeSelection = ({ input, label }) => {
  return (
    <SearchStepTimeSelection
      label={label}
      value={input.value}
      onChange={input.onChange}
    />
  );
};

const renderDeliveryDateSelection = ({ input, label }) => {
  return (
    <DeliveryDateSelection
      value={input.value || undefined}
      label={label}
      onChange={input.onChange}
    />
  );
};

const DateTime = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  goBack,
  selectedPickUpDate,
  selectedDeliveryDate
}) => {
  return (
    <Grid.Container>
      <FormHeading>
        <Heading wrapperTag="h1">Date & Time</Heading>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </Paragraph>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <Field
            component={renderDateSelection}
            name="pickUpDate"
            label="Pick-up date"
          />

          <Field
            component={renderTimeRangeSelection}
            name="pickUpTime"
            label="Pick-up time"
          />

          <Field
            component={renderDeliveryDateSelection}
            name="deliveryDate"
            label="Delivery date"
          />

          {selectedDeliveryDate!== 'sameDayDelivery' && !isNull(selectedDeliveryDate) && <Field
            component={renderTimeRangeSelection}
            name="deliveryTime"
            label="Delivery time"
          />}
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={submitting || !valid}
          >
            Next <Icon icon="arrow-right" />
          </Button>
          <Button onClick={goBack} style={{ float: 'left' }} ghost>
            <Icon icon="arrow-left" /> Back
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default DateTime;
