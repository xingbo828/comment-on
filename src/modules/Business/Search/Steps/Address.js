import React from 'react';
import { Field } from 'redux-form/immutable';
import Immutable from 'immutable';
import { Button, FormLayout } from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';
import AddressSelection from '../../components/SearchStepAddressSelection';
import { Heading, Paragraph } from '../../../../globalComponents/Typography';
import { HeadingInfo, HeadingParagraph } from './SharedStyles';

const { Form, FormActions } = FormLayout;

const renderAddressSelection = ({ input, label, desc }) => {
  const value = Immutable.Iterable.isIterable(input.value)
    ? input.value.toJS()
    : input.value;
  const from = value.from || null;
  const to = value.to || null;
  return (
    <AddressSelection
      google={window.google}
      onChange={input.onChange}
      from={from}
      to={to}
    />
  );
};

const Address = ({ handleSubmit, pristine, reset, valid, submitting }) => {
  return (
    <Grid.Container>
      <HeadingInfo>
        <Heading wrapperTag="h1">Address Information</Heading>
        <HeadingParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </HeadingParagraph>
      </HeadingInfo>
      <Form onSubmit={handleSubmit}>
        <Field
          component={renderAddressSelection}
          name="addresses"
          desc={renderAddressSelection}
        />
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

Address.propTypes = {};

export default Address;
