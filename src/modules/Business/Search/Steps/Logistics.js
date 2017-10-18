import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  Radio
} from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';

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
    <Grid.Container>
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
        <Button style={{float: 'right'}} type="submit" icon="arrow-right" primary disabled={submitting || !valid}>Next</Button>
      </form>
    </Grid.Container>
  );
};

Logistics.propTypes = {

};

export default Logistics;
