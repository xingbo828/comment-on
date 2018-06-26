import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import startCase from 'lodash/startCase';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Address from '../../Common/Configurations/Move/Address';
import Date from '../../Common/Configurations/Move/Date';
import Logistics from '../../Common/Configurations/Move/Logistics';
import Items from '../../Common/Configurations/Move/Items';
import ContactInfo from '../../Common/Configurations/Move/ContactInfo';
import Overview from '../../Common/Configurations/Move/Overview';

import Steps from '../../../globalComponents/Steps';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';
import overviewEnhancer from './overviewEnhancer';

const Step = Steps.Step;

const availableConfigSteps = {
  Address,
  Date,
  Logistics,
  Items,
  ContactInfo,
  Overview: overviewEnhancer(Overview)
};

const DynamicBuildConfigurations = ({ match, history, location, profileData: { configurations } }) => {
  const paths = configurations.map((c, index) => {
    const essential =  {
      path: `${match.url}/${c.toLowerCase()}`,
      component: availableConfigSteps[c],
      editPath: match.url,
      configurations,
      postEdit: `${match.url}/${configurations[configurations.length -1].toLowerCase()}`
    };
    if(index < configurations.length - 1) {
      Object.assign(essential, { next: `${match.url}/${configurations[index + 1].toLowerCase()}` })
    }
    if(index > 0 && configurations.length > 1) {
      Object.assign(essential, { previous: `${match.url}/${configurations[index -1].toLowerCase()}` })
    }

    return essential
  })
  const currentStep = paths.findIndex((p) => p.path === history.location.pathname);
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
            title={startCase(c)}
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
                    render={() => <p.component
                      configurations={p.configurations}
                      editPath={p.editPath}
                      next={p.next}
                      providerId={match.params.moverId}
                      previous={p.previous}
                      postEdit={p.postEdit}
                    />}
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
