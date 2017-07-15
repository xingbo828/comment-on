import React from 'react';
import { Switch, Link } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BasicProfile from './BasicProfileContainer';

const Account = () => {
  return (
    <div>
      <ul>
        <li><Link to="/account/profile-basic">Manage my basic profile</Link></li>
      </ul>
      <Switch>
        <ProtectedRoute path="/account/profile-basic" component={BasicProfile} />
      </Switch>
    </div>
  );
};

export default Account;
