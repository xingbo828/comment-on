import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Address from '../../Common/Configurations/Move/Address';
import Date from '../../Common/Configurations/Move/Date';
import Logistics from '../../Common/Configurations/Move/Logistics';
import PickUp from '../../Common/Configurations/Move/PickUp';
import Delivery from '../../Common/Configurations/Move/Delivery';
import Items from '../../Common/Configurations/Move/Items';
import ContactInfo from '../../Common/Configurations/Move/ContactInfo';
import Overview from '../../Common/Configurations/Move/Overview';
import SkinnyFooter from '../../Common/SkinyFooter'
import Box from '../../../globalComponents/Box';
import Grid from '../../../globalComponents/Grid';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
import FadeInRouteTransition from '../../Common/RouteTransitions/FadeInRouteTransition';
import overviewEnhancer from './overviewEnhancer';
import ProgressBar from '../../../globalComponents/ProgressBar';
import CoverPhoto from '../../../globalComponents/CoverPhoto';

import Styled from './Styled'

const availableConfigSteps = {
  Address,
  Date,
  Logistics,
  PickUp,
  Delivery,
  Items,
  ContactInfo,
  Overview: overviewEnhancer(Overview)
};

const DynamicBuildConfigurations = ({ match, history, location, profileData: { id, slug, configurations, coverPhoto, name } }) => {
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
    const progress = (current + 1) / configurations.length * 100
    return (
      <ProgressBar value={progress} />
    );
  }

  const getCurrentStepLabel = (currentStep) => {
    const key = configurations[currentStep];
    return availableConfigSteps[key].label;
  }

  if (match.isExact) {
    return (<Redirect to={paths[0].path} />);
  }

  return (
    <React.Fragment>
      <CoverPhoto src={coverPhoto} />
        <Grid.Container>
          <Grid.Row>
            <Styled.EnhancedGridCol xl={12} xlOffset={6} lg={14} lgOffset={5} md={18} mdOffset={3} sm={24} xs={24}>
              <Box vertical={6} below={12} between={11}>
                <Box between={8}>
                  <Box between={3}>
                    <Box between={3}>
                      <Heading wrapperTag="h2" size="xs" secondary centered uppercase>Get a Quote</Heading>
                      <Heading wrapperTag="h1" size="lg" centered>{name}</Heading>
                    </Box>
                    <Paragraph large centered>Step {currentStep + 1}/{configurations.length}: {getCurrentStepLabel(currentStep)}</Paragraph>
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
                                slug={match.params.slug}
                                providerId={id}
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
            </Styled.EnhancedGridCol>
          </Grid.Row>
        </Grid.Container>
        <SkinnyFooter />
    </React.Fragment>
  );
};

export default DynamicBuildConfigurations;
