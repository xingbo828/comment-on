import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button, Radio } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import Layout from '../../../../globalComponents/Layout';
import ResidenceTypeSelection from '../../components/SearchConfigurations/ResidenceTypeSelection';
import { Heading, Paragraph } from '../../../../globalComponents/Typography';
import { HeadingInfo, HeadingParagraph } from './SharedStyles';

const { Form, FormActions, FormInner } = Layout.Form;


const renderResidenceTypeSelection =  ({ input, name, label, desc }) => {
  return (
    <ResidenceTypeSelection
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const renderAbleToAssist = ({ input, name, label, desc }) => {
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
};


const Logistics = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <Grid.Container>
      <HeadingInfo>
        <Heading wrapperTag="h1">Logistics</Heading>
        <HeadingParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </HeadingParagraph>
      </HeadingInfo>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <Field
            component={renderResidenceTypeSelection}
            name="residenceType"
            label="Pick-up residence"
          />

          <Field
            component={renderAbleToAssist}
            name="ableToAssist"
            label="Will you be assisting?"
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

Logistics.propTypes = {};

export default Logistics;
