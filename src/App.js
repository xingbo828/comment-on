import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './foundation/variables';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import Nav from './modules/Common/Nav';
import Footer from './modules/Common/Footer';
import asyncLoad from './modules/Common/asyncLoad';
import './foundation/base.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <main>
            <Nav />
            <Switch>
              <Route exact path="/" component={asyncLoad(() => import('./modules/Home'))} />
              <ProtectedRoute path="/account" component={asyncLoad(() => import('./modules/Account'))} />
              <Route path="/mover" component={asyncLoad(() => import('./modules/Mover'))} />
              <Route path="/project" component={asyncLoad(() => import('./modules/Project'))} />
              <Route path="/login" component={asyncLoad(() => import('./modules/Account/Login'))} />
            </Switch>
            <Footer />
          </main>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
