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

  getCurrentStep = (projectSummary) => {
    if(projectSummary.status === 'created') {
      if (projectSummary.myMoverInfo.status === 'sent') {
        return SummaryProgress.PanelKeys.reply;
      } else if (projectSummary.myMoverInfo.status === 'accept') {
        return SummaryProgress.PanelKeys.awaitConfirmation;
      } else if (projectSummary.myMoverInfo.status === 'reject') {
        return SummaryProgress.PanelKeys.declined;
      }
    }
    else if(projectSummary.status === 'accept') {
      if (projectSummary.myMoverInfo.status === 'accept') {
        return SummaryProgress.PanelKeys.contactInfoReceived;
      } else {
        return SummaryProgress.PanelKeys.leadClosed;
      }
    }

  };

  renderPostReply = (moverStatus, ownerStatus, owner) => {
    if(ownerStatus === 'created') {
      if(moverStatus === 'accept') {
        return (
          <ProgressPanels.Panel
            header="await customer confirmation"
            inProgressIndexReplacement={<Icon icon="spinner" spin />}
            panelKey={SummaryProgress.PanelKeys.awaitConfirmation}
          />
        );
      } else if (moverStatus === 'reject') {
        return (
          <ProgressPanels.Panel
            header="declined"
            inProgressIndexReplacement={<Icon icon="lock" />}
            panelKey={SummaryProgress.PanelKeys.declined}
          />
        );
      }
    }
    else if(ownerStatus === 'accept') {
      if(moverStatus === 'accept') {
        return (
          <ProgressPanels.Panel
            header="contact info received"
            panelKey={SummaryProgress.PanelKeys.contactInfoReceived}
          >
            <p>Email: {owner.email}</p>
            <p>Phone number: {owner.phoneNumber}</p>
          </ProgressPanels.Panel>
        );
      } else {
        return (
          <ProgressPanels.Panel
            header="Lead closed"
            nProgressIndexReplacement={<Icon icon="lock" />}
            panelKey={SummaryProgress.PanelKeys.leadClosed}
          />
        );
      }
    }
  }


  render() {
    const { projectSummary } = this.props;
    const currentStep = this.getCurrentStep(projectSummary);
    return (
      <ProgressPanels current={currentStep} viewport="mobile">
        <ProgressPanels.Panel
          header="lead available"
          panelKey={SummaryProgress.PanelKeys.leadAvailable}
        />
        <ProgressPanels.Panel header="reply or decline" panelKey={SummaryProgress.PanelKeys.reply}>
          <ReplyForm />
        </ProgressPanels.Panel>
        {this.renderPostReply(projectSummary.myMoverInfo.status, projectSummary.status, projectSummary.owner)}
      </ProgressPanels>
    );
  }
}

export default SummaryProgress;
