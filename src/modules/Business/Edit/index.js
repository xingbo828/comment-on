import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import ProfilePictureContainer from './ProfilePictureContainer';
import Settings from '../../../globalComponents/Settings';

const SideBarLinks = [
  {
    title: "Basic Info",
    path: "/business/edit/:businessId/basic-info"
  },
  {
    title: "Business Pictures",
    path: "/business/edit/:businessId/business-pictures"
  }
];

const BusinessEdit = ({ match: { isExact } }) => {
  return (
    <Settings links={SideBarLinks}>
      <Switch>
        <ProtectedRoute
          path="/business/edit/:businessId/business-pictures"
          component={ProfilePictureContainer}
        />
      </Switch>
    </Settings>
  );
};

export default withRouter(BusinessEdit);
