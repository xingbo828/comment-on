import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Address from '../../Project/Configurations/Move/Address';
import Date from '../../Project/Configurations/Move/Date';
import Logistics from '../../Project/Configurations/Move/Logistics';
import Items from '../../Project/Configurations/Move/Items';
import Steps from '../../../globalComponents/Steps';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';

const Step = Steps.Step;

const availableConfigSteps = {
  Address,
  Date,
  Logistics,
  Items
};

const DynamicBuildConfigurations = ({ match, history, location, profileData: { configurations } }) => {
  const paths = configurations.map(c => ({
    path: `${match.url}/${c.toLowerCase()}`,
    component: availableConfigSteps[c]
  }))
  const currentStep = paths.findIndex((p) => p.path === history.location.pathname);
  console.log(paths, history.location.pathname)
  const renderSteps = (current) => {
    const stepClickHandler = (step) => {
      history.push({
        pathname: `${match.url}/${step}`,
        search: history.location.search
      });
    };
    return (
      <Steps current={current}>
        {configurations.map(c => (
          <Step
            key={c}
            title={c}
            onStepClick={stepClickHandler.bind(this, c.toLowerCase())}
          />
        ))}
      </Steps>
    );
  }




  return (
    <React.Fragment>
     {match.isExact && <Redirect to={paths[0].path} />}
      {renderSteps(currentStep)}
      <TransitionGroup>
        <FadeInRouteTransition minHeight={1800} key={location.key}>
          {() => (
            <Switch location={location}>
              {
                paths.map((p, index) =>
                  <Route
                    path={p.path}
                    key={p.path}
                    render={() => <p.component next={paths[index+1].path} />}
                  />
                )
              }
            </Switch>
          )}
        </FadeInRouteTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default DynamicBuildConfigurations;
