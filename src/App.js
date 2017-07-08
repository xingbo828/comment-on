import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './modules/Home';
import LoginPage from './modules/Account/loginContainer';
import ProfilePage from './modules/Account/profileContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/account">Profile Page</Link></li>
            <li><Link to="/account/login">Login Page</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/account" component={ProfilePage} />
          <Route path="/account/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
