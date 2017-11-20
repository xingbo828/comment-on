import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormLayout from './';
import Button from '../Button';

const { Form, FormActions } = FormLayout;
const FormDemo = () => (
  <div style={{ backgroundColor: '#fcfcfc', height: '100vh', width: '100vw'}}>

    <Form style={{height: '500px'}}>
      <p>abcd</p>
      <FormActions>
        <Button primary icon="arrow-right" style={{float: 'right'}}>Submit</Button>
      </FormActions>
    </Form>
  </div>
);


const FormStory = storiesOf('Global/Form/Container', module)
  .add('Form', FormDemo);

export default FormStory;
