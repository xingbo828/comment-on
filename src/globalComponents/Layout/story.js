import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormLayout from './Form';
import { Button } from '../Form';


const { Form, FormActions } = FormLayout;

const FormDemo = () => (
  <div style={{ padding: '50px 0', backgroundColor: '#fcfcfc', height: '100vh', width: '100vw'}}>
    <Form style={{height: '500px'}}>
      <FormActions>
        <Button primary icon="arrow-right" style={{float: 'right'}}>Submit</Button>
      </FormActions>
    </Form>
  </div>
);


const FormStory = storiesOf('Global/Layout/Layout', module)
  .add('Form', FormDemo);

export default FormStory;
