import React from 'react';
import chunk from 'lodash/chunk';
import Grid from '../../../globalComponents/Grid';
import PageHeader from '../../../globalComponents/Layout/PageHeader';
import Card from '../../../globalComponents/Card';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
// import asyncLoad from '../../Common/asyncLoad';
import MoveCard from './MoveCard';
import { Container, CardContainer } from './Styled';

// const getTypedProjectManagement = (type) => {
//   switch (type) {
//     case 'MOVE': {
//       return asyncLoad(() => import('./Move'));
//     }
//     default:
//       return asyncLoad(() => import('./Move'));
//     }
// };

const ProjectOverview = ({
  status,
  myProjectsData,
  user,
  selectedProvider,
  navToProject
}) => {
  const renderUnLoadedProjectCards = projects => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projectChunk, index) => (
      <Grid.Row key={index}>
        {projectChunk.map(p => (
          <Grid.Col key={p.id} xs={24} sm={24} md={8} lg={8}>
            <CardContainer>
              <Card loading />
            </CardContainer>
          </Grid.Col>
        ))}
      </Grid.Row>
    ));
  };

  const renderLoadedProjectsCards = projects => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projectChunk, index) => (
      <Grid.Row key={index}>
        {projectChunk.map(p => (
          <Grid.Col key={p.id} xs={24} sm={24} md={8} lg={8}>
            <CardContainer>
              <MoveCard
                project={p}
                navToProject={navToProject.bind(this, p.id)}
              />
            </CardContainer>
          </Grid.Col>
        ))}
      </Grid.Row>
    ));
  };

  const renderCards = (status, myProjectsData, user) => {
    if(!user.projects) {
      // no project
      return <Paragraph>No project yet...</Paragraph>
    }

    return status === 'LOADED'
          ? renderLoadedProjectsCards(myProjectsData)
          : renderUnLoadedProjectCards(Object.values(user.projects))
  };

  return (
    <Container>
      <PageHeader centered>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24}>
              <Heading wrapperTag="h1" size="md">
                My Moves
              </Heading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </PageHeader>
      <Grid.Container overlap>
        {renderCards(status, myProjectsData, user)}
      </Grid.Container>
    </Container>
  );
};

export default ProjectOverview;
