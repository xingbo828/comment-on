import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Layout from '../../../../../globalComponents/Layout';
import Icon from '../../../../../globalComponents/Icon';
import ResidenceTypeSelection from './ResidenceTypeSelection';
import DeliveryAccess from './DeliveryAccess';
import WillYouBeAssisting from './WillYouBeAssisting';
import { Heading, Paragraph } from '../../../../../globalComponents/Typography';
import PageHeader from '../../../../../globalComponents/Layout/PageHeader';

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const renderResidenceTypeSelection = ({ input, name, label, desc }) => {
  return (
    <ResidenceTypeSelection
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const renderDeliveryAccess = ({ input, name, label, desc }) => {
  return (
    <DeliveryAccess
      onChange={input.onChange}
      value={input.value}
      label={label}
    />
  );
};

const renderAbleToAssist = ({ input, name, label, desc }) => {
  return (
    <WillYouBeAssisting
      onChange={input.onChange}
      value={input.value}
      label={label}
      name={name}
    />
  );
};

const Logistics = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  goBack
}) => {
  return (
    <section>
      <PageHeader centered>
        <Grid.Container small>
          <Heading wrapperTag="h1">Address Information</Heading>
          <Paragraph light>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old.
          </Paragraph>
        </Grid.Container>
      </PageHeader>
      <Grid.Container>
        <FormHeading>
          <Heading wrapperTag="h1">Logistics</Heading>
          <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old.
          </Paragraph>
        </FormHeading>
        <Form onSubmit={handleSubmit}>
          <FormInner>
            <Field
              component={renderResidenceTypeSelection}
              name="residenceType"
              label="Pick-up residence"
            />

            <Field
              component={renderDeliveryAccess}
              name="deliveryAccess"
              label="Delivery access"
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
              disabled={submitting || !valid}
            >
              Next<Icon icon="arrow-right" />
            </Button>
            <Button onClick={goBack} ghost style={{ float: 'left' }}>
              <Icon icon="arrow-left" />Back
            </Button>
          </FormActions>
        </Form>
      </Grid.Container>
    </section>
  );
};

Logistics.propTypes = {};

export default Logistics;
