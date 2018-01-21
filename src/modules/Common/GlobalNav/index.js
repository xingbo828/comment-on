import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderNothing } from 'recompose';
import { auth } from '../../../firebaseClient';
import isLoggedIn from '../isLoggedIn';
import AccountNav from './AccountNav';
import globalNavHiddenList from './globalNavHiddenList.json';
import NotificationCenter from '../NotificationCenter';


const fromTheme = (prop) => ({ theme }) => theme.colors[prop]

const ContextHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  // background: ${fromTheme('primary')};
  height: 60px;
  width: 100%;
  line-height: 60px;
  padding: 0 2rem;
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

// const Location = styled.span`
//   flex: 1;
//   font-size: 1rem;
//   color: white;
//   margin: 0;
//   padding: 0;
// `;

const ContextHeaderLinks = styled.ul`
  flex: 10;
  display: flex;
  flex-direction: row-reverse;
`;

const ContextHeaderLink = styled.li`
  list-style: none;
  line-height: 30px;
> a {
    text-decoration: none;
  }
`;

const NavRoot = styled.nav`
  display: block;
  background: white;
  border: 1px solid ${props=>props.theme.colors.offWhite};
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

// const NavList = styled.ul`
//   display: flex;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   height: 60px;
//   line-height: 60px;
//   border-bottom: 1px solid ${fromTheme('borderPrimary')};

//   ${media.greaterThan('md')`
//       display: block;
//     `
//   }
// `;

// const NavListItem = styled.li`
//   text-align: center;
//   flex: 1;

//   span {
//     display: none;
//   }

//   a {
//     text-decoration: none;
//     height: 60px;
//     display: block;
//     color: inherit;
//     cursor: pointer;
//     font-weight: bold;
//   }

//   a::after {
//     content: '\f015';
//     font-family: FontAwesome;
//     font-size: 1rem;
//   }

//   ${media.greaterThan('md')`
//       border-right: 1px solid ${fromTheme('borderPrimary')};
//       display: inline-block;

//       span {
//         display: inline;
//       }

//       a {
//         padding: 0 2rem;
//       }

//       a::after {
//         display: none;
//       }
//     `
//   }
// `;

export const Nav = ({ user, isLoggedIn, logout }) => {
  return (
    <NavRoot>
      <ContextHeader>
        <Link to="/"><Heading>LOGO</Heading></Link>
        {/* <Location>Vancouver</Location> */}
        <ContextHeaderLinks>
        <ContextHeaderLink><Link to="/projects">My moves</Link></ContextHeaderLink>
        </ContextHeaderLinks>
        <NotificationCenter />
        <AccountNav />
      </ContextHeader>
      {/* <NavList>
        <NavListItem><Link to="/"><span>Overview</span></Link></NavListItem>
        <NavListItem><Link to="/"><span>Menu Item</span></Link></NavListItem>
        <NavListItem><Link to="/"><span>Menu Item</span></Link></NavListItem>
        <NavListItem><Link to="/"><span>Menu Item</span></Link></NavListItem>
      </NavList> */}
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
