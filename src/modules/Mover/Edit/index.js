import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import ProfilePicture from './ProfilePicture';
import BasicInfo from './BasicInfo';
import CrewMember from './CrewMember';
import Vehicles from './Vehicles';
import ProtectedRoute from '../../Common/ProtectedRoute';
import MoverEditSteps from './Shared/Steps';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';

const MoverEdit = ({ location, history, match }) => {
  const paths = [
    {
      path: `/mover/edit/:moverId/basic-profile`,
      component: BasicInfo
    },
    {
      path: `/mover/edit/:moverId/profile-picture`,
      component: ProfilePicture
    },
    {
      path: `/mover/edit/:moverId/crew-member`,
      component: CrewMember
    },
    {
      path: `/mover/edit/:moverId/vehicles`,
      component: Vehicles
    }
  ];

  const getCurrentStep = (history, moverId) => {
    return paths.findIndex((p)=>p.path.replace(':moverId', moverId) === history.location.pathname);
  }

  return (
    <div>
      <MoverEditSteps current={getCurrentStep(history, match.params.moverId)} moverId={match.params.moverId} history={history} />
      <TransitionGroup>
        <FadeInRouteTransition minHeight={500} key={location.key}>
          {() => (
            <Switch location={location}>
              {
                paths.map(p =>
                  <ProtectedRoute
                    path={p.path}
                    key={p.path}
                    component={p.component}
                  />
                )
              }
            </Switch>
          )}
        </FadeInRouteTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(MoverEdit);

