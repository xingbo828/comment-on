import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import {
  Button,
  Radio
} from '../../../../globalComponents/Form';
import { GridContainer } from '../../../../globalComponents/Grid';

const renderAbleToAssist =  ({ input, name, label, desc }) => {
  const placeholdertext = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`;
  return (
    <Radio.RadioGroup
      childType="wild"
      label={label}
      name={name}
      value={input.value || 'yes'}
      onChange={input.onChange}
    >
      <Radio.RadioBlock desc={placeholdertext} value="yes" label="Yes" />
      <Radio.RadioBlock desc={placeholdertext} value="no" label="No" />
    </Radio.RadioGroup>
  );
}

const renderDoYouHavePiano =  ({ input, name, label, desc }) => {
  const placeholdertext = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`;
  return (
    <Radio.RadioGroup
      childType="wild"
      label={label}
      name={name}
      value={input.value || 'yes'}
      onChange={input.onChange}
    >
      <Radio.RadioBlock desc={placeholdertext} value="yes" label="Yes" />
      <Radio.RadioBlock desc={placeholdertext} value="no" label="No" />
    </Radio.RadioGroup>
  );
}

const Logistics = ({
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
          component={renderAbleToAssist}
          name="ableToAssist"
          label="Will you be assisting?"
        />
        <Field
          component={renderDoYouHavePiano}
          name="havePiano"
          label="Do you have a piano?"
        />
        <Button type="submit" primary disabled={submitting || !valid}>Next</Button>
      </form>
    </GridContainer>
  );
};

Logistics.propTypes = {

};

export default Logistics;
