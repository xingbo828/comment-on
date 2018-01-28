import React from 'react';
import chunk from 'lodash/chunk';
import Grid from '../../../globalComponents/Grid';
import Card from '../../../globalComponents/Card';
import { Heading } from '../../../globalComponents/Typography';
// import asyncLoad from '../../Common/asyncLoad';
import MoveCard from './MoveCard';
import { CardContainer, HeadingWrapper } from './Styled';

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
    <Grid.Container fluid>
      <Grid.Row>
        <HeadingWrapper>
          <Grid.Container>
            <Heading wrapperTag="h1" size="md">
              My Moves
            </Heading>
          </Grid.Container>
        </HeadingWrapper>
      </Grid.Row>

      <Grid.Container>
        {status === 'LOADED'
          ? renderLoadedProjectsCards(myProjectsData)
          : renderUnLoadedProjectCards(Object.values(user.projects))}
      </Grid.Container>
    </Grid.Container>
  );
};

export default ProjectOverview;
