import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './foundation/variables';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import SwitchWithException from './modules/Common/SwitchWithException';
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
            <SwitchWithException>
              <Route exact path="/" component={asyncLoad(() => import('./modules/Home'))} />
              <ProtectedRoute path="/account" component={asyncLoad(() => import('./modules/Account'))} />
              <Route path="/mover" component={asyncLoad(() => import('./modules/Mover'))} />
              <Route path="/projects" component={asyncLoad(() => import('./modules/Project'))} />
              <ProtectedRoute path="/conversation" component={asyncLoad(() => import('./modules/Conversation'))} />
              <Route path="/login" component={asyncLoad(() => import('./modules/Account/Login'))} />
              <Route path="/404" component={asyncLoad(() => import('./modules/Errors/404'))} />
            </SwitchWithException>
            <Footer />
          </main>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
