import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';
import asyncLoad from '../../Common/asyncLoad';
import {
  HeadingWrapper
} from './Styled';

const ProjectManagement = ({ projectData, selectedProvider }) => {
  const getTypedProjectManagement = type => {
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
    <Grid.Container fluid>
      <Grid.Row>
        <HeadingWrapper>
          <Grid.Container>
            <Heading wrapperTag="h1" size="md">
              {projectData.configuration.projectName}
            </Heading>
          </Grid.Container>
        </HeadingWrapper>
      </Grid.Row>
      <Grid.Container>
        <TypedProjectManagement
          selectedProvider={selectedProvider}
          projectData={projectData}
        />
      </Grid.Container>
    </Grid.Container>
  );
};

export default ProjectManagement;
