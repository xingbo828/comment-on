import React from 'react';
import { Switch, Link } from 'react-router-dom';
 
const SideBarLink = ({ path }) => {
  return (
    <li>
      <Link   
        to={path}
      >
        Manage my basic profile
      </Link>
    </li>
  );
};