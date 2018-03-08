import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import BasicInfo from './BasicInfo';
import CrewMember from './CrewMember';
import Vehicles from './Vehicles';
import ProtectedRoute from '../../Common/ProtectedRoute';
import MoverEditSteps from './Shared/Steps';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';

const MoverEdit = ({ location, history, match }) => {
  const paths = [
    {
      path: `${match.url}/basic-profile`,
      component: BasicInfo
    },
    {
      path: `${match.url}/crew-member`,
      component: CrewMember
    },
    {
      path: `${match.url}/vehicles`,
      component: Vehicles
    }
  ];

  const getCurrentStep = (history, moverId) => {
    return paths.findIndex(p => p.path === history.location.pathname);
  }

  return (
    <div>
      <MoverEditSteps current={getCurrentStep(history)} history={history} />
      <TransitionGroup>
        <FadeInRouteTransition minHeight={800} key={location.key}>
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
