import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';
import asyncLoad from '../../Common/asyncLoad';
import {
  Container,
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
    <Container>
      <Grid.Row>
        <HeadingWrapper>
          <Grid.Container>
            <Heading wrapperTag="h1" size="md">
              {projectData.configuration.projectName}
            </Heading>
          </Grid.Container>
        </HeadingWrapper>
      </Grid.Row>
        <TypedProjectManagement
          selectedProvider={selectedProvider}
          projectData={projectData}
        />
      </Container>
  );
};

export default ProjectManagement;
