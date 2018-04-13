import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ItemQuantity from './ItemQuantity';
import ItemQuantityList from './ItemQuantityList';

const ItemQuantityBasicUsage = withInfo('Basic ItemQuantity')(() =>
  <div style={{padding: '4rem', width: '100%'}}>
    <ItemQuantity 
      title="Tomatoes"
      unit="Quantity"
      image="https://www.thermofisher.com/blog/wp-content/uploads/2014/11/tomato.jpg"
    />
  </div>
);

const ItemQuantityListUsage = withInfo('List view')(() =>
  <div style={{padding: '4rem', maxWidth: '768px'}}>
    <ItemQuantityList>
      <ItemQuantity 
        title="Small Sofa"
        unit="Quantity"
        image="https://hips.hearstapps.com/edc.h-cdn.co/assets/16/38/blue-sofa-joybird_1.jpg"
      />
      <ItemQuantity 
        title="Washing machine"
        unit="Quantity"
        image="http://www.washing-machine-wizard.com/images/frigidaire-faqe7077kn-affinity-frontloader-electric-dryer-washing-machine-70-cubic-feet-21486932.jpg"
      />
      <ItemQuantity 
        title="Tomatoes"
        unit="Quantity"
        image="https://www.thermofisher.com/blog/wp-content/uploads/2014/11/tomato.jpg"
      />
      <ItemQuantity 
        title="Tomatoes"
        unit="Quantity"
        image="https://www.thermofisher.com/blog/wp-content/uploads/2014/11/tomato.jpg"
      />
      
    </ItemQuantityList>
  </div>
);


const ItemQuantityStory = storiesOf('Global/Data Entry/Item Quantity', module)
  .addDecorator(withKnobs)
  .add('Basic usage', ItemQuantityBasicUsage)
  .add('List view', ItemQuantityListUsage);
export default ItemQuantityStory;
