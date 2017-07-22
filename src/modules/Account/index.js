import React from 'react';
import { Switch, Link } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import BasicProfile from './BasicProfileContainer';
import ContainerDiv from '../../foundation/Components/ContainerDiv';

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
    <ContainerDiv>
      <Settings links={SideBarLinks}>
        <Switch>
          <ProtectedRoute 
            path="/account/profile-basic" 
            component={BasicProfile} 
          />                                                               
        </Switch>
      </Settings>
    </ContainerDiv>
  );
};

export default Account;
