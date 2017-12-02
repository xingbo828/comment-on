import React from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../Common/ProtectedRoute';
import Profile from './Profile';


const Account = ({ match: { isExact } }) => {
  if (isExact) {
    return <Redirect to="/account/profile" />;
  }
  return (
      <Switch>
        <ProtectedRoute
          path="/account/profile"
          component={Profile}
        />
      </Switch>
  );
};

export default withRouter(Account);
