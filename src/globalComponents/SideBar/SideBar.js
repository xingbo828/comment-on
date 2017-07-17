import React from 'react';
import { 
    listItem
} from './Styled';

const Sidebar = ({ children }) => {
  return (    
    <ul>
      {children}
    </ul>
  );
};

export default Sidebar;