import React, { Component } from 'react';
import { TabPanelContainer } from './Styled';
import { string, node, oneOfType } from 'prop-types';

class TabPanel extends Component {
  componentDidMount() {
    if (this.props.isActive) {
      this.props.updateParentHeight(this.divElement.offsetHeight + 40);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive === false && this.props.isActive === true) {
      this.props.updateParentHeight(this.divElement.offsetHeight + 40);
    }
  }
  render() {
    const { isActive, children } = this.props;
    return (
      <TabPanelContainer innerRef={(divElement) => this.divElement = divElement} isActive={isActive}>
        {children}
      </TabPanelContainer>
    );
  }
};

TabPanel.propTypes = {
  panelKey: string.isRequired,
  header: oneOfType([string, node]).isRequired,
  children: node.isRequired
};

export default TabPanel;
