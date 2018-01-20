import React from 'react';
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
  selectedProvider,
  navToProject
}) => {
  console.log(status, myProjectsData)
  // const numberOfProjects = Object.keys(user.projects).length;
  // const TypedProjectCard = getTypedProjectManagement('Move');

  const renderUnLoadedProjectCards = (projects) => {
    return projects.map(p => (
        <Grid.Col key={p.id} xs={24} sm={24} md={8} lg={8}><Card loading /></Grid.Col>
    ));
  };

  const renderLoadedProjectsCards = (projects) => {
    return projects.map(p => (
      <Grid.Col key={p.id} xs={24} sm={24} md={8} lg={8}><MoveCard project={p} navToProject={navToProject.bind(this, p.id)} /></Grid.Col>
  ));
  };

  return (
    <Grid.Container>
      <Grid.Row>
        {
          status==='LOADED' ? renderLoadedProjectsCards(myProjectsData) : renderUnLoadedProjectCards(Object.values(user.projects))
        }
      </Grid.Row>
    </Grid.Container>
  );
};

export default ProjectOverview;
