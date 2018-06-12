import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderNothing } from 'recompose';
import { auth } from '../../../firebaseClient';
import isLoggedIn from '../isLoggedIn';
import globalNavHiddenList from './globalNavHiddenList.json';

import Logo from '../../../globalComponents/Logo';
import AuthAwareNav from './AuthAwareNav'


const ContextHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding: 0 1rem;

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0 1.5rem;
    height: 80px;
    line-height: 80px;
  `}
`;


const NavRoot = styled.nav`
  position: relative;
  z-index: 10;
  display: block;
  background: white;
  border: 1px solid ${props=>props.theme.colors.border};
  border-top: none;
`;

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Nav = ({ user, isLoggedIn, loginStatus, logout, history }) => {


  return (
    <NavRoot>
      <ContextHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <AuthAwareNav loginStatus={loginStatus} isLoggedIn={isLoggedIn} />
      </ContextHeader>
    </NavRoot>
  );
};

const logout = () => {
  auth.signOut();
};

const pathMatchesHiddenList = (pathname) => {
  return globalNavHiddenList.some(pathItem => {
    const reg = new RegExp(pathItem);
    return reg.test(pathname)
  });
};

const NavContainer = compose(
  withRouter,
  isLoggedIn,
  branch(
    props => pathMatchesHiddenList(props.location.pathname),
    renderNothing
  ),
  withProps(props => ({
    logout
  }))
)(Nav);

export default NavContainer;
