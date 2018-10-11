import React from 'react';
import startCase from 'lodash/startCase';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Address from '../../../Common/Configurations/Move/Address';
import Date from '../../../Common/Configurations/Move/Date';
import Logistics from '../../../Common/Configurations/Move/Logistics';
import Items from '../../../Common/Configurations/Move/Items';
import Overview from '../../../Common/Configurations/Move/Overview';

import { Heading, Paragraph } from '../../../../globalComponents/Typography';
import Box from '../../../../globalComponents/Box';
import Grid from '../../../../globalComponents/Grid';
import Steps from '../../../../globalComponents/Steps';
import CoverPhoto from '../../../../globalComponents/CoverPhoto';
import ProgressBar from '../../../../globalComponents/ProgressBar';
import FadeInRouteTransition from '../../../Common/RouteTransitions/FadeInRouteTransition';
import overviewEnhancer from './overviewEnhancer';

const Step = Steps.Step;

const availableConfigSteps = {
  Address,
  Date,
  Logistics,
  Items,
  Overview: overviewEnhancer(Overview)
};

const MoveConfigurations = ({ location, history, match }) => {
  const configurations = [ 'Address', 'Date', 'Logistics', 'Items', 'Overview' ]

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

  const renderSteps = (current) => {
    const stepClickHandler = (step) => {
      history.push({
        pathname: `${match.url}/${step}`,
        search: history.location.search
      });
    };

    const progress = (current + 1) / configurations.length * 100 
    return (
      <ProgressBar value={progress} />
    );
  }


  const currentStep = paths.findIndex((p) => p.path === history.location.pathname);
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col xl={14} xlOffset={5} lg={14} lgOffset={5} md={18} mdOffset={3} sm={24} xs={24}>
          {match.isExact && <Redirect to={paths[0].path} />}
          <Box vertical={10} between={11}>
            <Box between={8}>
              <Box between={3}>
                <Heading wrapperTag="h2" size="xs" centered>GET A QUOTE</Heading>
                <Heading wrapperTag="h1" centered>Nathan's Moving Company</Heading>
                <Paragraph centered>Step {currentStep + 1}/{configurations.length}: {configurations[currentStep]}</Paragraph>
              </Box>
              {renderSteps(currentStep)}
            </Box>
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
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default withRouter(MoveConfigurations);
