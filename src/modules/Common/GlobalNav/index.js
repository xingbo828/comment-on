import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderNothing } from 'recompose';
import { auth } from '../../../firebaseClient';
import isLoggedIn from '../isLoggedIn';
import AccountNav from './AccountNav';
import globalNavHiddenList from './globalNavHiddenList.json';
import NotificationCenter from '../NotificationCenter';
import { Button } from '../../../globalComponents/Form';
import Link from '../../../globalComponents/Link';


const fromTheme = (prop) => ({ theme }) => theme.colors[prop]

const ContextHeaderLink = styled.span`
  padding: 0 1rem 0 0;

  ${props=>props.theme.media.greaterThan('sm')`
    display: none;
  `}
`

const ContextHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding: 0 0 0 1rem;

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0 0 0 1.5rem;
    height: 80px;
    line-height: 80px;
  `}
`;

const Heading = styled.h1`
  text-decoration: none;
  flex: 1;
  display: inline;
  font-size: 1rem;
  color: white;
  margin: 0 1rem 0 0;
  padding: 0 1rem 0 0;
  border-right: 1px solid white;
  font-weight: 800;
  letter-spacing: .1em;
  color: ${fromTheme('primary')};
`;

const ContextHeaderLinks = styled.ul`
  flex: 10;
  display: flex;
  padding: 0;
  flex-direction: row-reverse;
  margin: 0;
  align-items: center;
`;

const ContextHeaderButton = styled.li`
  list-style: none;
  line-height: 30px;
  margin: 0 1.5rem 0 0;

> a {
    text-decoration: none;
  }

  ${props=>props.theme.media.lessThan('sm')`
    display: none;
  `}
`;

const NavRoot = styled.nav`
  display: block;
  background: white;
  border: 1px solid ${props=>props.theme.colors.border};
  border-top: none;
`;

export const Nav = ({ user, isLoggedIn, logout, history }) => {
  const sentToMyMovesPage = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/projects'
    })
  };

  return (
    <NavRoot>
      <ContextHeader>
        <Heading>LOGO</Heading>
        <ContextHeaderLinks>
        {isLoggedIn && (
          <div>
            <ContextHeaderButton>
              <Button small onClick={sentToMyMovesPage}>My moves</Button>
            </ContextHeaderButton>
            <ContextHeaderLink>
              <Link secondary onClick={sentToMyMovesPage}>My moves</Link>
            </ContextHeaderLink>
          </div>
        )}
        </ContextHeaderLinks>
        <NotificationCenter />
        <AccountNav />
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
  withProps(props => ({
    logout
  })),
  branch(
    props => pathMatchesHiddenList(props.location.pathname),
    renderNothing
  )
)(Nav);

export default NavContainer;
