import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import Header from './modules/Common/Header';
import asyncLoad from './modules/Common/asyncLoad';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={asyncLoad(() => import('./modules/Home'))} />
          <ProtectedRoute exact path="/account" component={asyncLoad(() => import('./modules/Account/profileContainer'))} />
          <Route exact path="/login" component={asyncLoad(() => import('./modules/Account/Login/loginContainer'))} />
        </div>
      </Router>
    );
  }
}

export default App;
