import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './foundation/variables';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import ProtectedRoute from './modules/Common/ProtectedRoute';
import asyncLoad from './modules/Common/asyncLoad';
import './foundation/base.js';
import withErrorBoundary from './modules/Common/withErrorBoundary';
import ErrorPage from './modules/Common/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <main>
            {/* <GlobalNav /> */}
            <Switch>
              {/* <ProtectedRoute path="/account" component={asyncLoad(() => import('./modules/Account'))} /> */}
              {/* <Route path="/projects" component={asyncLoad(() => import('./modules/Project'))} /> */}
              {/* <ProtectedRoute path="/conversation" component={asyncLoad(() => import('./modules/Conversation'))} /> */}
              {/* <Route path="/login" component={asyncLoad(() => import('./modules/Account/Login'))} /> */}
              {/* <Route path="/reset-password" component={asyncLoad(() => import('./modules/Account/ResetPassword'))} /> */}

              <Route path="/configuration/move" component={asyncLoad(() => import('./modules/Mover'))} />
              <Route path="/profile/:slug" component={asyncLoad(() => import('./modules/Mover/Profile'))} />
              <Route path="/" component={asyncLoad(() => import('./modules/Home'))} />
            </Switch>
          </main>
        </ThemeProvider>
      </Router>
    );
  }
}

export default withErrorBoundary(ErrorPage)(App);
