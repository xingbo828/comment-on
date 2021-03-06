import React, { Component, Children } from 'react';
import { string, func, bool } from 'prop-types';
import {
  TabContainer,
  TabBar,
  TabPanelsContainer
} from './Styled';
import TabBarLink from './TabBarLink';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activekey: this.props.activeKey,
      containerHeight: 0
    };
    this.construct = this.construct.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.updateParentHeight = this.updateParentHeight.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if(!!nextProps.activeKey && nextProps.activeKey !== this.state.activekey) {
      this.setState({
        activekey: nextProps.activeKey
      });
    }
  }


  onSelect(panelKey) {
    this.setState({
      activekey: panelKey
    });
    if(this.props.onTabChange){
      this.props.onTabChange(panelKey);
    }
  }

  updateParentHeight(height) {
    if (height !== this.state.containerHeight) {
      this.setState({
        containerHeight: height
      });
    }

  }


  construct(fillWidth) {
    const activeKey = this.state.activekey;
    const updateParentHeight = this.updateParentHeight;
    const panels = [];
    const tabBarLinks = [];
    Children.forEach(this.props.children, (child, index) => {
      if (!child) return;
      // If there is no key provide, use the panel order as default key
      const panelKey = child.props.panelKey || String(index);
      const header = child.props.header;
      let isActive;
      if((activeKey === null && index === 0) || activeKey === panelKey){
        isActive = true;
      } else {
        isActive = false;
      }
      const props = {
        key: index,
        panelKey,
        isActive,
        updateParentHeight,
        children: child.props.children
      };
      tabBarLinks.push(<TabBarLink fillWidth={fillWidth} key={panelKey} panelKey={panelKey} header={header} isActive={isActive} onSelect={this.onSelect} />);
      panels.push(React.cloneElement(child, props));
    })
    return { panels, tabBarLinks };
  }

  render() {
    console.log(this.state.activekey)
    const { fillWidth }= this.props;
    const tabs = this.construct(fillWidth);
    return (
      <TabContainer {...this.props} containerHeight={this.state.containerHeight}>
        <TabBar>{tabs.tabBarLinks}</TabBar>
        <TabPanelsContainer>{tabs.panels}</TabPanelsContainer>
      </TabContainer>
    );
  }
}

Tabs.propTypes = {
  activeKey: string,
  onTabChange: func,
  fillWidth: bool
};

Tabs.defaultProps = {
  fillWidth: false,
  activeKey: null
};
export default Tabs;
