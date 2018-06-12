import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './foundation/variables';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import GlobalNav from './modules/Common/GlobalNav';
import Footer from './modules/Common/Footer';
import asyncLoad from './modules/Common/asyncLoad';
import './foundation/base.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <main>
            <GlobalNav />
            <Switch>
              <Route exact path="/" component={asyncLoad(() => import('./modules/Home'))} />
              <ProtectedRoute path="/account" component={asyncLoad(() => import('./modules/Account'))} />
              <Route path="/mover" component={asyncLoad(() => import('./modules/Mover'))} />
              <Route path="/projects" component={asyncLoad(() => import('./modules/Project'))} />
              <ProtectedRoute path="/conversation" component={asyncLoad(() => import('./modules/Conversation'))} />
              <Route path="/login" component={asyncLoad(() => import('./modules/Account/Login'))} />
              <Route path="/reset-password" component={asyncLoad(() => import('./modules/Account/ResetPassword'))} />
            </Switch>
            <Footer />
          </main>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
