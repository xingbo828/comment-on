import React, { Component } from 'react';
import ProgressPanels from '../../../../../globalComponents/ProgressPanels';
import Icon from '../../../../../globalComponents/Icon';
import ReplyForm from './Reply';
class SummaryProgress extends Component {
  render() {
    return (
      <ProgressPanels current="reply">
        <ProgressPanels.Panel
          header="lead available"
          panelKey="lead-available"
        />
        <ProgressPanels.Panel header="reply or decline" panelKey="reply">
          <ReplyForm />
        </ProgressPanels.Panel>
        <ProgressPanels.Panel
          header="await customer confirmation"
          inProgressIndexReplacement={<Icon icon="spinner" spin />}
          panelKey="await-confirmation"
        />
      </ProgressPanels>
    );
  }
}

export default SummaryProgress;
