import React from 'react';

import { storiesOf } from '@storybook/react';
import { compose, withStateHandlers, withProps, toClass } from 'recompose';

import Switch from './';



const enhance = compose(
  toClass,
  withStateHandlers(
    ({ initialChecked = false }) => ({
      checked: initialChecked
    }),
    {
      toggle: ({ checked }) => () => ({
        checked: !checked
      })
    }
  ),
  withProps((props) => ({
    input: {
      checked: props.checked,
      onChange: () => {
        props.toggle();
      }
    }
  }))
);

const SwitchWithState = enhance(Switch)


const SwitchDemo= () =>
  <div style={{padding: '25px'}}>
    <SwitchWithState label="Default size" />
    <SwitchWithState label="Small size"  size="small"/>
  </div>
;


const SwitchStory = storiesOf('Global/Data Entry/Switch', module)
  .add('Basic usage', SwitchDemo);
export default SwitchStory;
