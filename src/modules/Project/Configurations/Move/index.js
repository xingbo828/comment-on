import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AddressStep from './Address';
import DateStep from './Date';
import LogisticsStep from './Logistics';
import Items from './Items';
import Overview from './Overview';
import MoveConfigSteps from './Shared/MoveConfigSteps';
import FadeInRouteTransition from '../../../Common/RouteTransitions/FadeInRouteTransition';

const MoveConfigurations = ({ location, history, match }) => {
  const paths = [
    {
      path: `${match.url}/address`,
      component: AddressStep
    },
    {
      path: `${match.url}/date`,
      component: DateStep
    },
    {
      path: `${match.url}/logistics`,
      component: LogisticsStep
    },
    {
      path: `${match.url}/items`,
      component: Items
    },
    {
      path: `${match.url}/overview`,
      component: Overview
    }
  ];

  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      <MoveConfigSteps current={getCurrentStep(history)} history={history} />
      <TransitionGroup>
        <FadeInRouteTransition minHeight={1800} key={location.key}>
          {() => (
            <Switch location={location}>
              {
                paths.map(p =>
                  <Route
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

export default withRouter(MoveConfigurations);
