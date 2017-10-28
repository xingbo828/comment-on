import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import DateTimeSelection from '../../components/SearchStepDateTimeSelection';

const renderDateTimeSelection = ({ input, label }) => {
  return (
    <DateTimeSelection
      label={label}
      value={input.value || null}
      onChange={input.onChange}
      placeholder="Select date & time"
    />
  );
};

const Date = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <Grid.Container>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderDateTimeSelection}
          name="dateTime"
          label="Moving Date & Time"
        />
        <Grid.Row>
          <Grid.Col xs={24} sm={24} md={5} lg={4} mdOffset={19} lgOffset={20}>
            <Button
              type="submit"
              icon="arrow-right"
              primary
              disabled={submitting || !valid}
            >
              Next
            </Button>
          </Grid.Col>
        </Grid.Row>
      </form>
    </Grid.Container>
  );
};

Date.propTypes = {};

export default Date;
