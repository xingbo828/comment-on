import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AddressStep from './AddressContainer';
import ItemsStep from './ItemsContainer';
import DateStep from './DateContainer';
import LogisticsStep from './LogisticsContainer';
import SearchSteps from '../../components/SearchSteps';
import StepsRouteTransition from './StepsRouteTransition';

const Steps = ({ location, history, match }) => {
  const paths = [
    {
      path: '/business/search/steps/address',
      component: AddressStep
    },
    {
      path: '/business/search/steps/items',
      component: ItemsStep
    },
    {
      path: '/business/search/steps/date',
      component: DateStep
    },
    {
      path: '/business/search/steps/logistics',
      component: LogisticsStep
    }
  ];

  const getCurrentStep = (history) => paths.findIndex((p)=>p.path === history.location.pathname);
  return (
    <div>
      <SearchSteps current={getCurrentStep(history)} history={history} />
      <TransitionGroup>
        <StepsRouteTransition key={location.key} unmountOnExit={true}>
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

export default withRouter(Steps);