import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormLayout from './Form';
import { Button } from '../Form';
import { Heading, Paragraph } from '../Typography';
import Grid from '../Grid';
import { TextField, TextArea, Switch } from '../Form';
const { Form, FormInner, FormActions, FormHeading } = FormLayout;

const FormDemo = () => (
  <Grid.Container>
    <FormHeading>
      <Heading wrapperTag="h1">Form Heading</Heading>
      <Paragraph>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Paragraph>
    </FormHeading>
    <Form>
      <FormInner>
        <TextField placeholder="Name" />
        <TextField placeholder="Phone number" type="tel" />
        <TextArea placeholder="Description" />

      </FormInner>
      <FormActions>
        <Button primary icon="arrow-right" style={{ float: 'right' }}>
          Submit
        </Button>
      </FormActions>
    </Form>
  </Grid.Container>
);

const FormStory = storiesOf('Global/Layout/Layout', module).add(
  'Form',
  FormDemo
);

export default FormStory;
