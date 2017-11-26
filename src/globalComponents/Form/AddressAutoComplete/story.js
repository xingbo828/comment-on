import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import AddressAutoComplete from '../../../globalComponents/Form/AddressAutoComplete';

const AddressAutoCompleteDemo = withInfo('Basic radio group')(() =>
  <div style={{width: '400px'}}>
    <AddressAutoComplete
      label="From"
      placeholder="where you from?"
      onSelect={action('selected')}
    />
  </div>
);

const AddressAutoCompleteStory = storiesOf('Global/Data Entry/AddressAutoComplete', module)
.add('Address auto complete', AddressAutoCompleteDemo);
export default AddressAutoCompleteStory;
