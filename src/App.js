import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProtectedRoute from './modules/Common/ProtectedRoute';
import Header from './modules/Common/Header';
import HomePage from './modules/Home';
import LoginPage from './modules/Account/loginContainer';
import ProfilePage from './modules/Account/profileContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/account" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
