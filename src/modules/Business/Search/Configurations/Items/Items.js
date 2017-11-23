import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';
import { Heading } from '../../../../../globalComponents/Typography';
import { HeadingInfo, HeadingParagraph } from '../Shared/Styled';
import ItemsCount from './ItemsCount';
import configs from './ItemsCount/configs';

const { Form, FormActions, FormInner } = Layout.Form;

const renderItemsCounts = ({ input, name, label, desc, configs }) => {
  // debugger;
  return (
    <ItemsCount
      onChange={input.onChange}
      value={input.value}
      label={label}
      desc={desc}
      configs={configs}
    />
  );
};

const Items = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  goBack
}) => {
  return (
    <Grid.Container>
      <HeadingInfo>
        <Heading wrapperTag="h1">Items</Heading>
        <HeadingParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </HeadingParagraph>
      </HeadingInfo>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <Field
            component={renderItemsCounts}
            name="speciality"
            label="Speciality Items"
            desc="Special items"
            configs={configs.speciality}
          />

          <Field
            component={renderItemsCounts}
            name="large"
            label="Large Items"
            desc="Anything that doesn't fit in a regular size sedan."
            configs={configs.large}
          />

          <Field
            component={renderItemsCounts}
            name="medium"
            label="Medium Items"
            desc="Anything that fits in a regular size sedan"
            configs={configs.medium}
          />
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={submitting || !valid}
          >
            Next <Icon icon="arrow-right" />
          </Button>
          <Button style={{ float: 'left' }} ghost onClick={goBack}>
            <Icon icon="arrow-left" /> Back
          </Button>
        </FormActions>
      </Form>
    </Grid.Container>
  );
};

Items.propTypes = {};

export default Items;
