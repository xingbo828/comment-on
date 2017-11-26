import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import DateSelection from './DateSelection';
import SearchStepTimeSelection from './TimeSelection';
import DeliveryDateSelection from './DeliveryDateSelection';
import Layout from '../../../../../globalComponents/Layout';
import { Heading } from '../../../../../globalComponents/Typography';
import { HeadingInfo, HeadingParagraph } from '../Shared/Styled';


const { Form, FormActions, FormInner } = Layout.Form;

const renderDateSelection = ({ input, label }) => {
  return (
    <DateSelection
      label={label}
      value={input.value || undefined}
      onChange={input.onChange}
    />
  );
};

const renderTimeRangeSelection = ({ input }) => {
  return (
    <SearchStepTimeSelection value={input.value} onChange={input.onChange} />
  );
};

const renderDeliveryDateSelection = ({ input, label }) => {
  return (
    <DeliveryDateSelection value={input.value || undefined} label={label} onChange={input.onChange} />
  );
};

const DateTime = ({ handleSubmit, pristine, reset, valid, submitting, goBack }) => {
  return (
    <Grid.Container>
      <HeadingInfo>
        <Heading wrapperTag="h1">Date & Time</Heading>
        <HeadingParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </HeadingParagraph>
      </HeadingInfo>
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
          />

          <Field
            component={renderDeliveryDateSelection}
            name="deliveryDate"
            label="Delivery date"
          />

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
          <Button
            onClick={goBack}
            style={{ float: 'left' }}
            ghost
          >
            <Icon icon="arrow-left" /> Back
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default DateTime;
