import React from 'react';
import chunk from 'lodash/chunk';
import Grid from '../../../globalComponents/Grid';
import PageHeader from '../../../globalComponents/Layout/PageHeader';
import Card from '../../../globalComponents/Card';
import Icon from '../../../globalComponents/Icon';
import { Heading, Paragraph } from '../../../globalComponents/Typography';
// import asyncLoad from '../../Common/asyncLoad';
import MoveCard from './MoveCard';
import { CardContainer } from './Styled';

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
  navToProject,
  history,
  theme
}) => {
  const renderUnLoadedProjectCards = projects => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projectChunk, index) => (
      <Grid.Row key={index} className="row">
        {projectChunk.map(p => (
          <Grid.Col key={p.id} xs={24} sm={24} md={12} lg={8}>
            <CardContainer>
              <Card loading style={{minHeight: 320}}/>
            </CardContainer>
          </Grid.Col>
        ))}
      </Grid.Row>
    ));
  };

  const renderLoadedProjectsCards = projects => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projectChunk, index) => (
      <Grid.Row key={index} className="row">
        {projectChunk.map(p => (
          <Grid.Col key={p.id} xs={24} sm={24} md={12} lg={8}>
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
      return (
        <Grid.Row className="row">
          <Grid.Col xs={24} sm={24} md={12} lg={8}>
            <Card onClick={() => {history.push('/projects/configurations/move/address')}}>
              <div style={{padding: '2rem', textAlign: 'center'}}>
                <Paragraph>No project yet. Let's add one.</Paragraph>
                <Icon size="3x" icon="plus" style={{color: theme.colors.secondary}}/>
              </div>
            </Card>
          </Grid.Col>
        </Grid.Row>
      )
    }

    return status === 'LOADED'
          ? renderLoadedProjectsCards(myProjectsData)
          : renderUnLoadedProjectCards(Object.values(user.projects))
  };

  return (
    <div>
      <PageHeader>
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
    </div>
  );
};

export default ProjectOverview;
