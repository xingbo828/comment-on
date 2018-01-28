import React from 'react';
import chunk from 'lodash/chunk';
import Grid from '../../../globalComponents/Grid';
import Card from '../../../globalComponents/Card';
import { Heading } from '../../../globalComponents/Typography';
// import asyncLoad from '../../Common/asyncLoad';
import MoveCard from './MoveCard';
import { Container, CardContainer, HeadingWrapper } from './Styled';

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

  return (
    <Container>
      <HeadingWrapper>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24}>
              <Heading wrapperTag="h1" size="md">
                My Moves
              </Heading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </HeadingWrapper>
      <Grid.Container>
        {status === 'LOADED'
          ? renderLoadedProjectsCards(myProjectsData)
          : renderUnLoadedProjectCards(Object.values(user.projects))}
      </Grid.Container>
    </Container>
  );
};

export default ProjectOverview;
