import React from 'react';
import Grid from '../../../globalComponents/Grid';
import PlaceIdToAddress from '../../../globalComponents/GooglePlaceIdToAddress';
import ProgressPanels from '../../../globalComponents/ProgressPanels';
import Icon from '../../../globalComponents/Icon';


const ProjectManagement = ({
  projectData
}) => {
  return (
    <Grid.Container>
      <ProgressPanels current={"finding-movers"}>
      <ProgressPanels.PanelHeading>
        Pick up: <PlaceIdToAddress google={window.google} placeId={projectData.configuration.addresses.pickUpAddress}/>
        Delivery: <PlaceIdToAddress google={window.google} placeId={projectData.configuration.addresses.deliveryAddress}/>
      </ProgressPanels.PanelHeading>
      <ProgressPanels.Panel header="completed form" panelKey="completed-form">
        This is step 1
      </ProgressPanels.Panel>
      <ProgressPanels.Panel
        inProgressIndexReplacement={<Icon icon="spinner" spin />}
        header="finding movers"
        tertiaryText="Avg. response time: 15mins"
        panelKey="finding-movers"
      />
      <ProgressPanels.Panel header="select a mover" panelKey="select-mover" tertiaryText={<span><Icon icon="spinner" spin /> <strong style={{marginLeft: 5}}>2 found</strong></span>}>
        This is step 3
      </ProgressPanels.Panel>
      <ProgressPanels.Panel header="confirmation" panelKey="confirmation" >
        This is step 4
      </ProgressPanels.Panel>
    </ProgressPanels>
    </Grid.Container>
  );
};

export default ProjectManagement;
