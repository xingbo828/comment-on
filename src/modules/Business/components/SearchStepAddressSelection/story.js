import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import AddressSelection from './';

import V2 from './V2';

const descPlaceHolder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const AddressSelectionDemo = withInfo('Address Selection')(() =>
<div style={{padding: '25px'}}>
  <AddressSelection google={window.google} label="Home address" placeId="" desc={descPlaceHolder} onChange={action('Location changed')} />
</div>
);

const AddressSelectionV2Demo = withInfo('Address Selection')(() =>
<div style={{padding: '25px'}}>
  <V2 google={window.google} desc={descPlaceHolder}  />
</div>
);


const AddressSelectionStory = storiesOf('Mover/Search/AddressSelection', module)
.addDecorator(withKnobs)
.add('Usage', AddressSelectionDemo)
.add('V2', AddressSelectionV2Demo);


export default AddressSelectionStory;
