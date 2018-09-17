import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configure-store';
// import registerServiceWorker from './registerServiceWorker';
import { onAuthChange } from './modules/Account/onAuthChangeAction';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
store.dispatch(onAuthChange());
// registerServiceWorker();
