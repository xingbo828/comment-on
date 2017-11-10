import React from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BasicProfile from './BasicProfile';
import ProfilePicture from './ProfilePicture';
import Settings from '../Common/Settings';

const SideBarLinks = [
  {
    title: "Basic Profile",
    path: "/account/profile-basic"
  },
  {
    title: "Profile Picture",
    path: "/account/profile-picture"
  }
];

const Account = ({ match: { isExact } }) => {
  if (isExact) {
    return <Redirect to="/account/profile-basic" />;
  }
  return (
    <Settings links={SideBarLinks}>
      <Switch>
        <ProtectedRoute
          path="/account/profile-basic"
          component={BasicProfile}
        />
        <ProtectedRoute
        path="/account/profile-picture"
        component={ProfilePicture}
      />
      </Switch>
    </Settings>
  );
};

export default withRouter(Account);
