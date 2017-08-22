import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { auth } from '../../firebaseClient';
import isLoggedIn from './isLoggedIn';
import AccountNav from './AccountNav';

const fromTheme = (prop) => ({ theme }) => theme[prop]

const ContextHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  background: ${fromTheme('primaryColor')};
  height: 60px;
  width: 100%;
  line-height: 60px;
  padding: 0 2rem;
`;

const Heading = styled.h1`
  flex: 1;
  display: inline;
  font-size: 1rem;
  color: white;
  margin: 0 1rem 0 0;
  padding: 0 1rem 0 0;
  border-right: 1px solid white;
  font-weight: bold;
`;

const Location = styled.span`
  flex: 1;
  font-size: 1rem;
  color: white;
  margin: 0;
  padding: 0;
`;

const ContextHeaderLinks = styled.ul`
  flex: 10;
  display: flex;
`;

const ContextHeaderLink = styled.li`
  list-style: none;
  line-height: 30px;
> a {
    color: ${fromTheme('offWhite')};
    text-decoration: none;
  }
`;

const NavRoot = styled.nav`
  display: block;
  margin: 0 0 2rem;
  background: white;

  ${props => props.theme.media.fromMedium`
      margin: 0 0 4rem;
    `
  }
`;

/*
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
*/

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid ${fromTheme('borderPrimary')};

  ${props => props.theme.media.fromMedium`
      display: block;
      margin: 0 0 4rem;
    `
  }
`;

const NavListItem = styled.li`
  text-align: center;
  flex: 1;

  span {
    display: none;
  }

  a {
    text-decoration: none;
    height: 60px;
    display: block;
    color: inherit;
    cursor: pointer;
    font-weight: bold;
  }

  a::after {
    content: '\f015';
    font-family: FontAwesome;
    font-size: 1rem;
  }

  ${props => props.theme.media.fromMedium`
      border-right: 1px solid ${fromTheme('borderPrimary')};
      display: inline-block;

      span {
        display: inline;
      }

      a {
        padding: 0 2rem;
      }
      
      a::after {
        display: none;
      }
    `
  }
`;

export const Nav = ({ user, isLoggedIn, logout }) => {
  return (
    <NavRoot>
      <ContextHeader>
        <Heading>Comment on</Heading>
        <Location>Vancouver</Location>
        <ContextHeaderLinks>
          <ContextHeaderLink>
            <Link to="/business/create">Register business</Link>
          </ContextHeaderLink>
        </ContextHeaderLinks>
        <AccountNav />
      </ContextHeader>
      <NavList>
        <NavListItem><Link to="/"><span>Overview</span></Link></NavListItem>
        <NavListItem><Link to="/"><span>Menu Item</span></Link></NavListItem>
        <NavListItem><Link to="/"><span>Menu Item</span></Link></NavListItem>
        <NavListItem><Link to="/"><span>Menu Item</span></Link></NavListItem>
        {/* { !isLoggedIn && <NavListItem><Link to="/login">Login</Link></NavListItem> } */}
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

