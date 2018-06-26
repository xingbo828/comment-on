import React from 'react';
import { Field } from 'redux-form/immutable';
import Immutable from 'immutable';
import { Button, TextArea, Legend } from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import Layout from '../../../../../globalComponents/Layout';
import ItemsCount from './ItemsCount';
import configs from './ItemsCount/configs';

const { Form, FormActions, FormInner, FormFieldSet } = Layout.Form;

const renderItemsCounts = ({ input, name, label, desc, configs }) => {
  const value = Immutable.Iterable.isIterable(input.value)
    ? input.value.toJS()
    : input.value;
  return (
    <ItemsCount
      onChange={input.onChange}
      value={value}
      label={label}
      desc={desc}
      configs={configs}
    />
  );
};

const Items = ({
  handleSubmit,
  next,
  previous,
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
                name="detail.specialCare"
                label="How many of the following fragile items do you need moved? These items may require special care when handling."
                configs={configs.specialCare}
              />
            </FormFieldSet>
            <FormFieldSet>
              <Field
                component={renderItemsCounts}
                name="detail.appliances"
                label="How many of the following home appliances are you moving?"
                configs={configs.appliances}
              />
            </FormFieldSet>
            <FormFieldSet>
              <Field
                component={renderItemsCounts}
                name="detail.decore"
                label="How many of the following home decore items are you moving?"
                configs={configs.decore}
              />
            </FormFieldSet>
            <FormFieldSet>

              <Legend>Did we miss anything? Briefly describe any items not listed above that you feel may require special care or handling. We'll ensure they're properly accounted for</Legend>
              <Field
                component={TextArea}
                name="detail.otherItems"
                label="Other items"
              />
            </FormFieldSet>
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
      </Grid.Container>
    </section>
  );
};

Items.propTypes = {};

export default Items;
