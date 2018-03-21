import React from 'react';
import { Field } from 'redux-form/immutable';
import { Button } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';
import ItemsCount from './ItemsCount';
import configs from './ItemsCount/configs';

const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const renderItemsCounts = ({ input, name, label, desc, configs }) => {
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
    <section>
      <Grid.Container>
        <Form onSubmit={handleSubmit}>
          <FormInner>
            <FormFieldSet>
              <Field
                component={renderItemsCounts}
                name="speciality"
                label="How many specialty items do you need moved? These items require special care when handling."
                configs={configs.speciality}
              />
            </FormFieldSet>
            <FormFieldSet>
              <Field
                component={renderItemsCounts}
                name="large"
                label="How many large sized items do you need moved? Typically items that won't fit in a regular size sedan."
                configs={configs.large}
              />
            </FormFieldSet>
            <FormFieldSet>
              <Field
                component={renderItemsCounts}
                name="medium"
                label="How many medium sized items do you need moved? These items should fit in a regular size sedan."
                configs={configs.medium}
              />
            </FormFieldSet>
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
            <Button style={{ float: 'left' }} ghost onClick={goBack}>
              <Icon icon="arrow-left" />Back
            </Button>
          </FormActions>
        </Form>
      </Grid.Container>
    </section>
  );
};

Items.propTypes = {};

export default Items;
