import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import * as theme from '../src/foundation/Variables';
import '../src/foundation/base';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

function loadStories() {
  require('../src/stories');
}


configure(loadStories, module);
