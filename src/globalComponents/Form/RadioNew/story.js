import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Radio,
  RadioList,
  RadioListItem
} from '../RadioNew'

const BasicUsage = withInfo('Basic radio group')(() =>
  <form>
    <Radio value="male" label="Male" color="#1d407f"/>
    <Radio value="female" label="Female" />
  </form>
);

const RadioListUsage= withInfo('Radio List view')(() =>
  <div style={{ padding: '40px' }}>
    <form>
      <RadioList
        value="male"
        onChange={action('changed')}
      >
        <RadioListItem description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mauris euismod justo auctor dignissim eu vitae massa. Integer malesuada velit ut justo dignissim, sit amet efficitur lorem auctor. Cras mattis semper nisi, sit amet porta nisi lacinia eu. Mauris sit amet nulla cursus, ultrices purus in, aliquam ipsum. Morbi diam massa, rutrum sed lobortis in, aliquet vel felis. Fusce ac dolor vel orci pulvinar lacinia. Nunc quis risus lectus." value="male" label="Male" color="#1d407f"/>
        <RadioListItem value="female" label="Female" />
      </RadioList>
    </form>
  </div>
);

const NestedRadioListUsage = withInfo('Radio List view')(() =>
  <form>
    <RadioList
      value="male"
      onChange={action('changed')}
    >
      <RadioListItem value="Cats" label="Cats" color="#1d407f">
        <Radio value="Cats - Persian" label="Persian" color="#1d407f" />
        <Radio value="Cats - Tabby" label="Tabby" color="#1d407f" />
      </RadioListItem>
      <RadioListItem value="Dogs" label="Dogs" />
    </RadioList>
  </form>
);


const RadioStory = storiesOf('Global/Data Entry/Radio 2.0', module)
  .add('Basic usage', BasicUsage)
  .add('List view', RadioListUsage)
  .add('Nested list view', NestedRadioListUsage)
export default RadioStory;
