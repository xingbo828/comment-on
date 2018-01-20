import React from 'react';
import Grid from '../../../globalComponents/Grid';
import asyncLoad from '../../Common/asyncLoad';

const getTypedProjectManagement = (type) => {
  switch (type) {
    case 'MOVE': {
      return asyncLoad(() => import('./Move'));
    }
    default:
      return asyncLoad(() => import('./Move'));
    }
};


const ProjectOverview = ({
  proejcts,
  selectedProvider
}) => {
  const TypedProjectCard = getTypedProjectManagement('Move');
  return (
    <Grid.Container>
      <Grid.Row>
        <TypedProjectCard/>
        <TypedProjectCard/>
        <TypedProjectCard/>
        <TypedProjectCard/>
        <TypedProjectCard/>
      </Grid.Row>
    </Grid.Container>
  );
};

export default ProjectOverview;
