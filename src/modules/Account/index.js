import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import SwitchWithException from '../Common/SwitchWithException';
import Profile from './Profile';


const Account = ({ match: { isExact } }) => {
  if (isExact) {
    return <Redirect to="/account/profile" />;
  }
  return (
      <SwitchWithException>
        <ProtectedRoute
          path="/account/profile"
          component={Profile}
        />
      </SwitchWithException>
  );
};

export default withRouter(Account);
