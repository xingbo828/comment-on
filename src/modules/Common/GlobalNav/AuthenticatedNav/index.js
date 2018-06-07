import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import AccountNav from '../AccountNav';
import NotificationCenter from '../../NotificationCenter';
import { Link } from '../../../../globalComponents/Link';
import Button from '../../../../globalComponents/Form/Button';
import Animation from '../../../../globalComponents/Animation'

const ContextHeaderLink = styled.span`
  padding: 0 1rem 0 0;

  ${props=>props.theme.media.greaterThan('sm')`
    display: none;
  `}
`



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

const AuthenticatedNav = ({ history, visible }) => {

  const sentToMyMovesPage = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/projects'
    })
  };

  return (
    <Animation.Fade timeout={300} in={visible} style={{display: 'flex'}}>
    {() => (
      <React.Fragment>
    <ContextHeaderLinks>
        <div>
          <ContextHeaderButton>
            <Button small onClick={sentToMyMovesPage}>My moves</Button>
          </ContextHeaderButton>
          <ContextHeaderLink>
            <Link inline secondary onClick={sentToMyMovesPage}>My moves</Link>
          </ContextHeaderLink>
        </div>
      </ContextHeaderLinks>
      <NotificationCenter />
      <AccountNav />
      </React.Fragment>
    )}
    </Animation.Fade>
  );
};



export default withRouter(AuthenticatedNav);
