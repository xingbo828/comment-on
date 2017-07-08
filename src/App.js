import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './modules/Home';
import LoginPage from './modules/Auth/loginContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/login">Login Page</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
