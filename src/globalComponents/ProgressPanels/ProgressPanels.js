import React, { Component, Children } from 'react';
import { string, node } from 'prop-types';
import PanelHeading from './PanelHeading';
import Panel from './Panel';
import { availableStatus } from './constants';
import {
  ProgressPanelsContainer
} from './Styled';


class ProgressPanels extends Component {

  constructPanels = (current, children) => {
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
        status: getStatus(currentIndex, index)
      };
      return React.cloneElement(child, props);
    });
  }

  constructPanelHeading = (children) => {
    const panelHeading = children.filter(c => c.type.name === PanelHeading.name);
    if(panelHeading.length > 0) {
      return panelHeading[0];
    }
    return null;
  };


  render() {
    const { current, children } = this.props;
    const panelHeading = this.constructPanelHeading(children);
    const pannels = this.constructPanels(current, children);
    return (
      <ProgressPanelsContainer>
        {panelHeading}
        {pannels}
      </ProgressPanelsContainer>
    );
  }
}

ProgressPanels.propTypes = {
  current: string.isRequired,
  children: node.isRequired
};

export default ProgressPanels;
