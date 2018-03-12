import React from 'react';
import ProgressPanels from '../../../../globalComponents/ProgressPanels';
import Grid from '../../../../globalComponents/Grid';
import Icon from '../../../../globalComponents/Icon';
import OverviewCard from './OverviewCard';
import MessageCard from './MessageCard';
import SelectMover from './SelectMover';
import Confirmation from './Confirmation';

const { Container, Row, Col } = Grid;

const MoveProjectManagement = ({ projectData, theme, history }) => {
  const getAcceptedProviders = providers => {
    if (!providers) {
      return [];
    }
    return providers.filter(p => p.status === 'accept' || p.status === 'confirmed');
  };

  const getConfirmedProvider = providers => {
    return providers.find(p => p.status === 'confirmed');
  };

  const getCurrentStep = projectData => {
    if (projectData.status === 'created') {
      if (!projectData.receivers) {
        return 'finding-movers';
      }
      const providerAccepted = getAcceptedProviders(projectData.receivers);
      if (providerAccepted.length > 0) {
        return 'select-mover';
      }
      return 'finding-movers';
    } else if (projectData.status === 'completed') {
      return 'confirmation';
    }
  };

  const renderProvidersList = (providers, projectId) => {
    const providerAccepted = getAcceptedProviders(projectData.receivers);
    if (providerAccepted.length > 0) {
      return (
        <SelectMover projectId={projectId} moversInfo={providerAccepted} />
      );
    }
    return null;
  };

  const current = getCurrentStep(projectData);
  return (
    <Container overlap>
      <Row>
        <Col xm={24} sm={24} md={24} lg={16}>
          <ProgressPanels current={current}>
            <ProgressPanels.Panel
              header="completed form"
              panelKey="completed-form"
            />
            <ProgressPanels.Panel
              inProgressIndexReplacement={<Icon icon="spinner" spin />}
              header="finding movers"
              panelKey="finding-movers"
            />
            <ProgressPanels.Panel
              header="select a mover"
              panelKey="select-mover"
              tertiaryText={
                <span>
                  <Icon icon="spinner" spin />{' '}
                  <strong style={{ marginLeft: 5 }}>
                    {getAcceptedProviders(projectData.receivers).length} found
                  </strong>
                </span>
              }
            >
              {renderProvidersList(projectData.receivers, projectData.id)}
            </ProgressPanels.Panel>
            <ProgressPanels.Panel
              header={
                <span style={current === 'confirmation' ? { color: theme.colors.success } : {}}>
                  you're done!
                </span>
              }
              panelKey="confirmation"
              inProgressIndexReplacement={<Icon style={{color: '#e31b23'}} icon="heart" />}
            >
              {projectData.status === 'completed' && (
                <Confirmation
                  receiver={getConfirmedProvider(projectData.receivers)}
                />
              )}
            </ProgressPanels.Panel>
          </ProgressPanels>
        </Col>
        <Col xm={24} sm={24} md={24} lg={8}>
          <MessageCard projectId={projectData.id} receivers={getAcceptedProviders(projectData.receivers)}/>
          <OverviewCard projectId={projectData.id} configuration={projectData.configuration} history={history} />
        </Col>
      </Row>
    </Container>
  );
};

export default MoveProjectManagement;
