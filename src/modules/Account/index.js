import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BasicProfile from './BasicProfileContainer';

import Settings from '../../globalComponents/Settings';

const SideBarLinks = [
  {
    title: "Info",
    path: "/account/profile-basic"
  },
  {
    title: "Info",
    path: "/account/profile-1"
  },
  {
    title: "Info",
    path: "/account/profile-2"
  }
];

const Account = () => {
  return (
    <Settings links={SideBarLinks}>
      <Switch>
        <ProtectedRoute
          path="/account/profile-basic"
          component={BasicProfile}
        />
      </Switch>
    </Settings>
  );
};

export default Account;
