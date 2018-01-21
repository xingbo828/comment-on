import React from 'react';
import chunk from 'lodash/chunk';
import Grid from '../../../globalComponents/Grid';
import Card from '../../../globalComponents/Card';
import asyncLoad from '../../Common/asyncLoad';
import MoveCard from './MoveCard';

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
  selectedProvider
}) => {
  console.log(status, myProjectsData)
  // const numberOfProjects = Object.keys(user.projects).length;
  // const TypedProjectCard = getTypedProjectManagement('Move');



  const renderUnLoadedProjectCards = (projects) => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projectChunk, index) => (
      <Grid.Row key={index}>
        {
          projectChunk.map(p => (
            <Grid.Col key={p.id} xs={24} sm={24} md={8} lg={8}><Card loading /></Grid.Col>
        ))
        }
      </Grid.Row>
    ));
  };

  const renderLoadedProjectsCards = (projects) => {
    const projectChunks = chunk(projects, 3);
    return projectChunks.map((projectChunk, index) => (
      <Grid.Row key={index}>
        {
          projectChunk.map(p => (
            <Grid.Col key={p.id} xs={24} sm={24} md={8} lg={8}><MoveCard project={p} /></Grid.Col>
        ))
        }
      </Grid.Row>
    ));
  };

  return (
    <Grid.Container>
        {
          status==='LOADED' ? renderLoadedProjectsCards(myProjectsData) : renderUnLoadedProjectCards(Object.values(user.projects))
        }
    </Grid.Container>
  );
};

export default ProjectOverview;
