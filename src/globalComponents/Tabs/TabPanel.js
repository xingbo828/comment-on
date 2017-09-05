import React, { Component } from 'react';
import { TabPanelContainer } from './Styled';

class TabPanel extends Component {
  componentDidMount() {
    this.height = this.divElement.offsetHeight + 40;
    if (this.props.isActive) {
      this.props.updateParentHeight(this.height);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive === false && this.props.isActive === true) {
      this.props.updateParentHeight(this.height);
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

export default TabPanel;
