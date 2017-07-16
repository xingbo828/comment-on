import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { auth } from '../../firebaseClient';
import isLoggedIn from './isLoggedIn';

const NavRoot = styled.nav`
`;
const NavList = styled.ul`
`;
const NavListItem = styled.li`
`;

export const Nav = ({ user, isLoggedIn, logout }) => {
  return (
    <NavRoot>
      <NavList>
        <NavListItem><Link to="/">Home Page</Link></NavListItem>
        { isLoggedIn && <NavListItem><Link to="/account">My Account</Link></NavListItem> }
        { !isLoggedIn && <NavListItem><Link to="/login">Login</Link></NavListItem> }
        { isLoggedIn && <NavListItem>
            Hi, {user.displayName} <a href="" onClick={logout}>Logout</a>
          </NavListItem> }
      </NavList>
    </NavRoot>
  );
};

const logout = () => {
  auth.signOut();
};

const NavContainer = compose(
  isLoggedIn,
 withProps(props => ({
   logout
 })),
)(Nav);

export default NavContainer;

