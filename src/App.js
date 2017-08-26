import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import * as theme from './foundation/Variables';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import Header from './modules/Common/Header';
import asyncLoad from './modules/Common/asyncLoad';
import './foundation/base.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <main>
            <Header />
            <Switch>
              <Route exact path="/" component={asyncLoad(() => import('./modules/Home'))} />
              <ProtectedRoute path="/account" component={asyncLoad(() => import('./modules/Account'))} />
              <Route path="/business" component={asyncLoad(() => import('./modules/Business'))} />
              <Route path="/login" component={asyncLoad(() => import('./modules/Account/Login'))} />
            </Switch>
          </main>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
