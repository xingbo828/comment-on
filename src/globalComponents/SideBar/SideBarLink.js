import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ListItem } from './Styled';

const SideBarLink = ({ path, title }) => {
  return (
    <ListItem>
      <NavLink
        to={path}
      >
        {title}
      </NavLink>
    </ListItem>
  );
};

export default withRouter(SideBarLink);
