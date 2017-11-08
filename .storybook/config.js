import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import theme from '../src/foundation/variables';
import '../src/foundation/base';

const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={['/']}>
      {story()}
    </MemoryRouter>
  </ThemeProvider>
));

function loadStories() {
  // require('../src/stories');
  requireAll(require.context("../src", true, /story\.jsx?$/));
}


configure(loadStories, module);
