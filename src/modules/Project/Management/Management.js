import React from 'react';
import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';
import asyncLoad from '../../Common/asyncLoad';
import { Container, HeadingWrapper } from './Styled';

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
      <HeadingWrapper>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24}>
              <Heading wrapperTag="h1" size="md">
                {projectData.configuration.projectName}
              </Heading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </HeadingWrapper>
      <TypedProjectManagement
        selectedProvider={selectedProvider}
        projectData={projectData}
      />
    </Container>
  );
};

export default ProjectManagement;
