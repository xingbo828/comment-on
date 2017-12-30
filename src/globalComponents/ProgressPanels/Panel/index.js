import React, { Component } from 'react';
import { string, oneOfType, node, oneOf, number } from 'prop-types';
import Icon from '../../Icon';
import Animation from '../../Animation';
import { availableStatus } from '../constants';
import {
  PanelContainer,
  PanelHeader,
  PanelHeaderTitleDeco,
  PanelHeaderTitle,
  PanelHeaderTertiaryText,
  PanelBody
} from './Styled';

class ProgressPanel extends Component {

  state = {
    height: 0
  };

  componentDidMount() {
    this.setState({
      height: this.getHeight()
    });

  }

  renderTitleIcon = (status, stepIndex, inProgressIndexReplacement) => {
    if (status === 'finished') {
      return <Icon icon="check" />;
    } else if (status === 'inProgress' && inProgressIndexReplacement) {
      return inProgressIndexReplacement;
    }
    return stepIndex + '. ';
  };

  getHeight = () => {
    if (this.container) {
      return this.container.offsetHeight;
    }
    return 0;
  }

  render() {
    const {
      status,
      stepIndex,
      header,
      tertiaryText,
      children,
      inProgressIndexReplacement,
      viewport
    } = this.props;
    return (
      <PanelContainer status={status}>
        <PanelHeader viewport={viewport}>
          <PanelHeaderTitle status={status}>
            <PanelHeaderTitleDeco>
              {this.renderTitleIcon(status, stepIndex, inProgressIndexReplacement)}
            </PanelHeaderTitleDeco>
            {header}
          </PanelHeaderTitle>
          {status === 'inProgress' && tertiaryText && (
            <PanelHeaderTertiaryText>{tertiaryText}</PanelHeaderTertiaryText>
          )}
        </PanelHeader>
        <Animation.Reveal timeout={500} height={this.state.height} in={children && status === 'inProgress'}>
          {() => <PanelBody viewport={viewport} innerRef={container => (this.container = container)}>{children}</PanelBody>}
        </Animation.Reveal>
      </PanelContainer>
    );
  }
}


ProgressPanel.propTypes = {
  header: string.isRequired,
  tertiaryText: oneOfType([string, node]),
  children: node,
  inProgressIndexReplacement: oneOfType([string, node]),
  status: oneOf([availableStatus.finished, availableStatus.inProgress, availableStatus.waiting]),
  stepIndex: number
};

export default ProgressPanel;
