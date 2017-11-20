import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AddressStep from './AddressContainer';
import Vehicle from './VehicleContainer';
import DateStep from './DateContainer';
import LogisticsStep from './LogisticsContainer';
import SearchSteps from '../../components/SearchSteps';
import StepsRouteTransition from './StepsRouteTransition';


const Configurations = ({ location, history, match }) => {
  const paths = [
    {
      path: '/business/search/configurations/address',
      component: AddressStep
    },
    {
      path: '/business/search/configurations/vehicle',
      component: Vehicle
    },
    {
      path: '/business/search/configurations/date',
      component: DateStep
    },
    {
      path: '/business/search/configurations/logistics',
      component: LogisticsStep
    }
  ];

  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      <SearchSteps current={getCurrentStep(history)} history={history} />
      <TransitionGroup>
        <StepsRouteTransition key={location.key}>
          {() => <Switch location={location}>
              {
                paths.map(p =>
                  <Route
                    path={p.path}
                    key={p.path}
                    component={p.component}
                  />
                )
              }
            </Switch>}
        </StepsRouteTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Configurations);
