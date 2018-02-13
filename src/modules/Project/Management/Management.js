import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';
import asyncLoad from '../../Common/asyncLoad';
import PageHero from '../../../globalComponents/Layout/PageHero';
import { Container } from './Styled';
import Link from '../../../globalComponents/Link';
import Icon from '../../../globalComponents/Icon';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderNothing } from 'recompose';

const ProjectManagement = ({ projectData, selectedProvider, history }) => {
// import asyncLoad from '../../Common/asyncLoad';
import { Container, HeadingWrapper } from './Styled';
import Move from './Move';

const ProjectManagement = ({ projectData }) => {
  const getTypedProjectManagement = type => {
    switch (type) {
      case 'MOVE': {
        return Move;
      }
      default:
        return Move;
    }
  };

  const TypedProjectManagement = getTypedProjectManagement(projectData.type);

  const sendToMyMovesPage = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/projects'
    })
  };

  return (
    <Container>
      <PageHero>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24}>
              <Link secondary onClick={sendToMyMovesPage}><Icon icon="arrow-left"/>&nbsp;&nbsp;My Moves</Link>
              <Heading wrapperTag="h1" size="md">
                {projectData.configuration.projectName}
              </Heading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </PageHero>
      <Grid.Container overlap>
        <TypedProjectManagement
          selectedProvider={selectedProvider}
          projectData={projectData}
        />
      </Grid.Container>
    </Container>
  );
};

export default compose(
  withRouter
)(ProjectManagement);
