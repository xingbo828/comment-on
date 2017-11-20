import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import DateSelection from '../../components/SearchConfigurations/DateSelection';
import SearchStepTimeSelection from '../../components/SearchConfigurations/TimeSelection';
import Layout from '../../../../globalComponents/Layout';
import { Heading, Paragraph } from '../../../../globalComponents/Typography';
import { HeadingInfo, HeadingParagraph } from './SharedStyles';


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

const DateTime = ({ handleSubmit, pristine, reset, valid, submitting }) => {
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
            name="date"
            label="Pick-up date"
          />

          <Field
            component={renderTimeRangeSelection}
            name="time"
          />
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            icon="arrow-right"
            disabled={submitting || !valid}
          >
            Next
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

export default DateTime;
