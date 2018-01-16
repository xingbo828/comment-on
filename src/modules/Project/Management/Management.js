import React from 'react';
import Grid from '../../../globalComponents/Grid';
import asyncLoad from '../../Common/asyncLoad';

const ProjectManagement = ({
  projectData,
  selectedProvider
}) => {

  const getTypedProjectManagement = (type) => {
    switch (type) {
      case 'MOVE': {
        return asyncLoad(() => import('./Move'));
      }
      default:
        return asyncLoad(() => import('./Move'));
      }
  };

  const TypedProjectManagement = getTypedProjectManagement(projectData.type);

  return (
    <Grid.Container>
      <TypedProjectManagement selectedProvider={selectedProvider} projectData={projectData} />
    </Grid.Container>
  );
};

export default ProjectManagement;
