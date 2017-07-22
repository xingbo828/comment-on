import React from 'react';
import { Switch, Link } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BasicProfile from './BasicProfileContainer';
import ProfilePicture from './ProfilePictureContainer';

const Account = () => {
  return (
    <div>
      <ul>
        <li><Link to="/account/profile-basic">Manage my basic profile</Link></li>
        <li><Link to="/account/profile-picture">Manage my profile picture</Link></li>
      </ul>
      <Switch>
        <ProtectedRoute path="/account/profile-basic" component={BasicProfile} />
        <ProtectedRoute path="/account/profile-picture" component={ProfilePicture} />
      </Switch>
    </div>
  );
};

export default Account;
