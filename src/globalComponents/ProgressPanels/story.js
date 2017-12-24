import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs';
import ProgressPanels from './';
import Icon from '../Icon';
import Grid from '../Grid';

const { Container } = Grid;


const label = 'Current';
const options = {
  'completed-form': 'completed-form',
  'finding-movers': 'finding-movers',
  'select-mover': 'select-mover',
  'confirmation': 'confirmation'
};
const defaultValue = 'finding-movers';


const Assembled = () => (
  <Container style={{marginTop: 50}}>
  <ProgressPanels current={select(label, options, defaultValue)}>
    <ProgressPanels.PanelHeading>
      This is heading
    </ProgressPanels.PanelHeading>
    <ProgressPanels.Panel header="completed form" panelKey="completed-form">
      This is step 1
    </ProgressPanels.Panel>
    <ProgressPanels.Panel
      inProgressIndexReplacement={<Icon icon="spinner" spin />}
      header="finding movers"
      tertiaryText="Avg. response time: 15mins"
      panelKey="finding-movers"
    >
      <div style={{height: 200}}>This is step 2</div>
    </ProgressPanels.Panel>
    <ProgressPanels.Panel header="select a mover" panelKey="select-mover" tertiaryText={<span><Icon icon="spinner" spin /> <strong style={{marginLeft: 5}}>2 found</strong></span>}>
      This is step 3
    </ProgressPanels.Panel>
    <ProgressPanels.Panel header="confirmation" panelKey="confirmation" >
      This is step 4
    </ProgressPanels.Panel>
  </ProgressPanels>
  </Container>
);

const CompletedPanel = () => (
  <ProgressPanels.Panel stepIndex={2} header="completed form" status="finished">
    This is body
  </ProgressPanels.Panel>
);

const InProgressPanel = () => (
  <ProgressPanels.Panel
    inProgressIndexReplacement={<Icon icon="spinner" spin />}
    stepIndex={2}
    header="finding movers"
    status="inProgress"
    tertiaryText="Avg. response time: 15mins"
  >
    This is body
  </ProgressPanels.Panel>
);

const WaitingPanel = () => (
  <ProgressPanels.Panel stepIndex={3} header="select a mover" status="waiting">
    This is body
  </ProgressPanels.Panel>
);

const story = storiesOf('Global/Data Display/Progress Panels', module)
.addDecorator(withKnobs)
  .add('Assembled', Assembled)
  .add('CompletedPanel', CompletedPanel)
  .add('InProgressPanel', InProgressPanel)
  .add('WaitingPanel', WaitingPanel);

export default story;
