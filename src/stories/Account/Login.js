import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Login from '../../modules/Account/Login/Login';

const account={
  status: 'NOT_AUTHENTICATED'
};
const LoginDemo = withInfo('Account Nav')(() =>
  <Login
    style={{}}
    account={account}
    facebookLogin={action('Facebook login clicked')}
    googleLogin={action('Google login clicked')}
  />
);


const LoginStory = storiesOf('Account/Login', module)
.addDecorator(withKnobs)
.add('Usage', LoginDemo);


export default LoginStory;
