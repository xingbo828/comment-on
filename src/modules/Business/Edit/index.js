import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from '../../Common/ProtectedRoute';
import ProfilePictureContainer from './ProfilePictureContainer';
import BasicInfoContainer from './BasicInfoContainer';
import Settings from '../../../globalComponents/Settings';



const BusinessEdit = ({ match: { isExact, params: { businessId } } }) => {
  const SideBarLinks = [
    {
      title: "Basic Info",
      path: `/business/edit/${businessId}/basic-info`
    },
    {
      title: "Pictures",
      path: `/business/edit/${businessId}/business-pictures`
    }
  ];
  return (
    <Settings links={SideBarLinks}>
      <Switch>
        <ProtectedRoute
          path="/business/edit/:businessId/basic-info"
          component={BasicInfoContainer}
        />
        <ProtectedRoute
          path="/business/edit/:businessId/business-pictures"
          component={ProfilePictureContainer}
        />
      </Switch>
    </Settings>
  );
};

export default withRouter(BusinessEdit);
