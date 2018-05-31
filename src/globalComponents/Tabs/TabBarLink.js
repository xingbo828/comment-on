import React from 'react';
import { TabBarLinkContainer, TabBarLinkInk } from './Styled';

const TabBarLink = ({ isActive, panelKey, header, onSelect, fillWidth }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onSelect(panelKey);
  }
  return (
    <TabBarLinkContainer fillWidth={fillWidth} isActive={isActive} onClick={clickHandler}>
      {header}
      <TabBarLinkInk isActive={isActive} />
    </TabBarLinkContainer>
  );
};

export default TabBarLink;
