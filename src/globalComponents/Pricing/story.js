import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Pricing from './Pricing';

const PricingDemo = withInfo('Default Rate')(() =>
  <div style={{padding: '25px'}}>
    <Pricing
      price={257.68}
      sufix="estimate"
    />
  </div>
);


const PricingStory = storiesOf('Global/Data Display/Pricing', module)
.add('Basic Usage', PricingDemo)

export default PricingStory;
