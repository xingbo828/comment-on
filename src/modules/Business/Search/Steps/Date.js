import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../../globalComponents/Form';
import { GridContainer } from '../../../../globalComponents/Grid';
import DateTimeSelection from '../../components/SearchStepDateTimeSelection'

const renderDateTimeSelection =  ({ input, label }) => {
  return <DateTimeSelection label={label} value={input.value || null} onChange={input.onChange} placeholder="Select date & time" />;
}

const Date = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <GridContainer>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderDateTimeSelection}
          name="dateTime"
          label="Moving Date & Time"
        />
        <Button type="submit" primary disabled={submitting || !valid}>Next</Button>
      </form>
    </GridContainer>
  );
};

Date.propTypes = {

};

export default Date;
