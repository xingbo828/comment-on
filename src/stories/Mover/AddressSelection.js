import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import AddressSelection from '../../modules/Business/components/AddressSelection';

const descPlaceHolder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const AddressSelectionDemo = withInfo('Address Selection')(() =>
<div style={{padding: '25px'}}>
  <AddressSelection google={window.google} label="Home address" desc={descPlaceHolder} onChange={action('Location changed')} />
</div>
);


const AddressSelectionStory = storiesOf('Mover/AddressSelection', module)
.addDecorator(withKnobs)
.add('Usage', AddressSelectionDemo);


export default AddressSelectionStory;
