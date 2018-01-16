import React from 'react';
import ProgressPanels from '../../../../globalComponents/ProgressPanels';
import Icon from '../../../../globalComponents/Icon';
import ManagementHeader from './Header';
import SelectMover from './SelectMover';

const MoveProjectManagement = ({ projectData, selectedProvider }) => {
  const getAcceptedProviders = (providers) => {
    if(!providers) {
      return [];
    }
    return providers.filter(p => p.status === 'accept');
  };

  const getCurrentStep = (projectData) => {
    if(projectData.status === 'created') {
      if(!projectData.receivers) {
        return 'finding-movers';
      }
      const providerAccepted = getAcceptedProviders(projectData.receivers);
      if(providerAccepted.length > 0) {
        if(selectedProvider) {
          return 'share-contact-info';
        }
        return 'select-mover';
      }
      return 'finding-movers';
    } else if(projectData.status === 'accept') {
      return 'confirmation';
    }


  };

  const renderProvidersList = (providers, projectId) => {
    const providerAccepted = getAcceptedProviders(projectData.receivers);
    if(providerAccepted.length > 0){
      return <SelectMover projectId={projectId} moversInfo={providerAccepted} />
    }
    return null;
  }

  return (
    <ProgressPanels current={getCurrentStep(projectData)}>
      <ProgressPanels.PanelHeading>
        <ManagementHeader projectData={projectData} current={getCurrentStep(projectData)} />
      </ProgressPanels.PanelHeading>
      <ProgressPanels.Panel header="completed form" panelKey="completed-form" />
      <ProgressPanels.Panel
        inProgressIndexReplacement={<Icon icon="spinner" spin />}
        header="finding movers"
        tertiaryText="Avg. response time: 15 mins"
        panelKey="finding-movers"
      />
      <ProgressPanels.Panel
        header="select a mover"
        panelKey="select-mover"
        tertiaryText={
          <span>
            <Icon icon="spinner" spin />{' '}<strong style={{ marginLeft: 5 }}>{getAcceptedProviders(projectData.receivers).length} found</strong>
          </span>
        }
      >
        {renderProvidersList(projectData.receivers, projectData.id)}
      </ProgressPanels.Panel>
      <ProgressPanels.Panel header="share contact info with mover" panelKey="share-contact-info">
        share contact info
      </ProgressPanels.Panel>
      <ProgressPanels.Panel header="confirmation" panelKey="confirmation">
        This is step 4
      </ProgressPanels.Panel>
    </ProgressPanels>
  );
};

export default MoveProjectManagement;
