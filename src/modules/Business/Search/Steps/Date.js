import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import DateSelection from '../../components/SearchStepDateSelection';
import SearchStepTimeSelection from '../../components/SearchStepTimeSelection';

const renderDateSelection = ({ input, label }) => {
  return (
    <DateSelection
      label={label}
      value={input.value || null}
      onChange={input.onChange}
      placeholder="click here to pick a date"
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
      <form onSubmit={handleSubmit}>
        <Field
          component={renderDateSelection}
          name="date"
          label="Select your moving date"
        />

        <Field
          component={renderTimeRangeSelection}
          name="time"
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

export default DateTime;
