import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import Header from './modules/Common/Header';
import asyncLoad from './modules/Common/asyncLoad';
import './foundation/base';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={asyncLoad(() => import('./modules/Home'))} />
            <ProtectedRoute path="/account" component={asyncLoad(() => import('./modules/Account'))} />
            <Route path="/login" component={asyncLoad(() => import('./modules/Account/Login'))} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
