import React, { Component } from 'react';
import ProgressPanels from '../../../../../globalComponents/ProgressPanels';
import Icon from '../../../../../globalComponents/Icon';
import ReplyForm from './ReplyForm';
class SummaryProgress extends Component {
  static PanelKeys = {
    leadAvailable: 'lead-available',
    reply: 'reply',
    awaitConfirmation: 'await-confirmation',
    declined: 'declined',
    contactInfoReceived: 'contact-info-received',
    leadClosed: 'lead-closed'
  };

  getCurrentStep = projectSummary => {
    if (projectSummary.status === 'created') {
      if (projectSummary.receiver.status === 'sent') {
        return SummaryProgress.PanelKeys.reply;
      } else if (projectSummary.receiver.status === 'accept') {
        return SummaryProgress.PanelKeys.awaitConfirmation;
      } else if (projectSummary.receiver.status === 'reject') {
        return SummaryProgress.PanelKeys.declined;
      }
    } else if (projectSummary.status === 'completed') {
      if (projectSummary.receiver.status === 'confirmed') {
        return SummaryProgress.PanelKeys.contactInfoReceived;
      }
    } else if (projectSummary.status === 'rejected') {
      return SummaryProgress.PanelKeys.leadClosed;
    }
  };

  renderPostReply = (currentStep, owner) => {
    if (currentStep === SummaryProgress.PanelKeys.awaitConfirmation || currentStep === SummaryProgress.PanelKeys.reply) {
      return (
        <ProgressPanels.Panel
          header="await customer confirmation"
          inProgressIndexReplacement={<Icon icon="spinner" spin />}
          panelKey={SummaryProgress.PanelKeys.awaitConfirmation}
        />
      );
    } else if (currentStep === SummaryProgress.PanelKeys.declined) {
      return (
        <ProgressPanels.Panel
          header="declined"
          inProgressIndexReplacement={<Icon icon="lock" />}
          panelKey={SummaryProgress.PanelKeys.declined}
        />
      );
    } else if (currentStep === SummaryProgress.PanelKeys.contactInfoReceived) {
      return (
        <ProgressPanels.Panel
          header="contact info received"
          panelKey={SummaryProgress.PanelKeys.contactInfoReceived}
        >
        <div style={{overflow: 'auto'}}>
          <p>Email: {owner.email}</p>
          <p>Phone number: {owner.phone}</p>
        </div>
        </ProgressPanels.Panel>
      );
    } else if (currentStep === SummaryProgress.PanelKeys.leadClosed) {
      return (
        <ProgressPanels.Panel
          header="Lead closed"
          inProgressIndexReplacement={<Icon icon="lock" />}
          panelKey={SummaryProgress.PanelKeys.leadClosed}
        />
      );
    }
  };

  render() {
    const { projectSummary } = this.props;
    const currentStep = this.getCurrentStep(projectSummary);
    return (
      <ProgressPanels current={currentStep} viewport="mobile">
        <ProgressPanels.Panel
          header="lead available"
          panelKey={SummaryProgress.PanelKeys.leadAvailable}
        />
        <ProgressPanels.Panel
          header="reply or decline"
          panelKey={SummaryProgress.PanelKeys.reply}
        >
          {currentStep === SummaryProgress.PanelKeys.reply && <ReplyForm />}
        </ProgressPanels.Panel>
        {this.renderPostReply(currentStep, projectSummary.owner)}
      </ProgressPanels>
    );
  }
}

export default SummaryProgress;
