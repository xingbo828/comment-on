import React, { Component, Children } from 'react';
import { string, node, oneOf } from 'prop-types';
import PanelHeading from './PanelHeading';
import Panel from './Panel';
import { availableStatus } from './constants';
import {
  ProgressPanelsContainer
} from './Styled';


class ProgressPanels extends Component {

  constructPanels = (current, viewport, children) => {
    const panelChildrens = children.filter(c => c.type.name === Panel.name);
    const currentIndex = panelChildrens.findIndex(e => e.props.panelKey === current);

    const getStatus = (currentIndex, index) => {
      if(currentIndex > index) {
        return availableStatus.finished;
      } else if (currentIndex === index) {
        return availableStatus.inProgress;
      }
      return availableStatus.waiting;
    }

    return Children.map(panelChildrens, (child, index) => {
      const { panelKey, header, tertiaryText, inProgressIndexReplacement, children} = child.props;
      const props = {
        key: panelKey,
        stepIndex: (index+1),
        header,
        children,
        tertiaryText,
        inProgressIndexReplacement,
        status: getStatus(currentIndex, index),
        viewport
      };
      return React.cloneElement(child, props);
    });
  }

  constructPanelHeading = (viewport, children) => {
    const panelHeading = children.filter(c => c.type.name === PanelHeading.name);
    if(panelHeading.length > 0) {
      return panelHeading[0];
    }
    return null;
  };


  render() {
    const { current, viewport, children } = this.props;
    const panelHeading = this.constructPanelHeading(viewport, children);
    const pannels = this.constructPanels(current, viewport, children);
    return (
      <ProgressPanelsContainer>
        {panelHeading}
        {pannels}
      </ProgressPanelsContainer>
    );
  }
}

ProgressPanels.propTypes = {
  viewport: oneOf(['responsive', 'mobile', 'desktop']),
  current: string.isRequired,
  children: node.isRequired
};

ProgressPanels.defaultProps = {
  current: '',
  viewport: 'responsive'
};

export default ProgressPanels;
