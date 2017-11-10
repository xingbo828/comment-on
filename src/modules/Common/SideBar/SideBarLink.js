import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ListItem } from './Styled';
import withSettingsContext from '../Settings/withSettingsContext';

const SideBarLink = ({ path, title, toggleFormMode }) => {
  return (
    <ListItem onClick={toggleFormMode}>
      <NavLink
        to={path}
      >
        {title}
      </NavLink>
    </ListItem>
  );
};

export default withRouter(withSettingsContext(SideBarLink));
