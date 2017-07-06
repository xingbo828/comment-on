import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './modules/Home';
import AuthPage from './modules/Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/auth">Auth Page</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={HomePage} />
          <Route path="/auth" component={AuthPage} />
        </div>
      </Router>
    );
  }
}

export default App;
