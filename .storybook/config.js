import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import theme from '../src/foundation/variables';
import configureStore from '../src/store/configure-store';
import '../src/foundation/base';

const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
}

const store = configureStore();

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        {story()}
      </MemoryRouter>
    </ThemeProvider>
  </Provider>
));

function loadStories() {
  // require('../src/stories');
  requireAll(require.context("../src", true, /story\.jsx?$/));
}


configure(loadStories, module);
