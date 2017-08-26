import React from 'react';
import {
    List
} from './Styled';

const Sidebar = ({ children }) => {
  return (
    <List>
      {children}
    </List>
  );
};

export default Sidebar;
