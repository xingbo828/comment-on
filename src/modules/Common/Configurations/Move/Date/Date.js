import React from 'react';
// import isNull from 'lodash/isNull';
import Immutable from 'immutable';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';
import DateSelection from './DateSelection';


const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const renderDateSelection = ({ input, label }) => {
  const value = Immutable.Iterable.isIterable(input.value)
    ? input.value.toJS()
    : input.value;
  return (
    <DateSelection
      label={label}
      value={value||undefined}
      onChange={input.onChange}
    />
  );
};

// const renderTimeRangeSelection = ({ input, label }) => {
//   return (
//     <SearchStepTimeSelection
//       label={label}
//       value={input.value}
//       onChange={input.onChange}
//     />
//   );
// };

// const renderDeliveryDateSelection = ({ input, label }) => {
//   return (
//     <DeliveryDateSelection
//       value={input.value || undefined}
//       label={label}
//       onChange={input.onChange}
//     />
//   );
// };

const DateTime = ({
  handleSubmit,
  next,
  previous,
  valid,
  submitting,
  goBack
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInner>
        <FormFieldSet>
          <Field
            component={renderDateSelection}
            name="pickUpDate"
            label="Which day would you like to schedule your move?"
          />
        </FormFieldSet>
        {/* <FormFieldSet>
          <Field
            component={renderTimeRangeSelection}
            name="pickUpTime"
            label="Around what time would you like your items picked up?"
          />
        </FormFieldSet> */}
        {/* <Field
          component={renderDeliveryDateSelection}
          name="deliveryDate"
          label="When would you like to have your items delivered? A later date indicates a need for overnight storage services."
        /> */}
        {/* {selectedDeliveryDate!== 'sameDayDelivery' && !isNull(selectedDeliveryDate) &&
          <FormFieldSet>
            <Field
              component={renderTimeRangeSelection}
              name="deliveryTime"
              label="Which day would you like your items delivered?"
            />
          </FormFieldSet>
        } */}
      </FormInner>
      <FormActions>
      {next && <Button
          style={{ float: 'right' }}
          type="submit"
          primary
          disabled={submitting || !valid}
        >
          Next<Icon icon="arrow-right" />
        </Button>}
        {previous && <Button onClick={goBack} style={{ float: 'left' }} ghost>
          <Icon icon="arrow-left" />Back
        </Button>}
      </FormActions>
    </Form>
  );
};

export default DateTime;
