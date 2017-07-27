import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { auth } from '../../firebaseClient';
import isLoggedIn from './isLoggedIn';
import AccountNav from './AccountNav';

const fromTheme = (prop) => ({ theme }) => theme[prop]

const ContextHeader = styled.div`
  box-sizing: border-box;
  background: ${fromTheme('primaryColor')};
  height: 60px;
  width: 100%;
  line-height: 60px;
  padding: 0 2rem;
`;

const Heading = styled.h1`
  display: inline;
  font-size: 1rem;
  color: white;
  margin: 0 1rem 0 0;
  padding: 0 1rem 0 0;
  border-right: 1px solid white;
  font-weight: bold;
`;

const Location = styled.span`
  font-size: 1rem;
  color: white;
  margin: 0;
  padding: 0;
`;

const NavRoot = styled.nav`
  display: block;
  margin: 0 0 4rem;
`;

const Account = styled.div`
  float: right;
  line-height: 60px;
`;

const Pic = styled.div`
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: white;
  display: inline-block;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid ${fromTheme('borderPrimary')};
`;

const NavListItem = styled.li`
  height: 60px;
  display: inline-block;
  border-right: 1px solid ${fromTheme('borderPrimary')};

  a {
    text-decoration: none;
    padding: 0 2rem;
    color: inherit;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Nav = ({ user, isLoggedIn, logout }) => {
  return (
    <NavRoot>
      <ContextHeader>
        <Heading>Comment on</Heading>
        <Location>Vancouver</Location>
        <AccountNav />
      </ContextHeader>
      <NavList>
        <NavListItem><Link to="/">Overview</Link></NavListItem>
        <NavListItem><Link to="/">Menu Item</Link></NavListItem>
        <NavListItem><Link to="/">Menu Item</Link></NavListItem>
        { !isLoggedIn && <NavListItem><Link to="/login">Login</Link></NavListItem> }
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

