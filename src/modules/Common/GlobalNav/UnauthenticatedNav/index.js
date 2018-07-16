import React from 'react'
import Styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import Button from '../../../../globalComponents/Form/Button';
import Animation from '../../../../globalComponents/Animation'

const Menu = Styled.ul`
  display: flex;
  transition: .3s;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const MenuItem = Styled.li`
  margin: 0;
  padding: 0 0 0 2rem;
  flex:1
`



const UnauthenticatedNav = ({ history, visible }) => {
  const goToLogin = (tab) => (e) => {
    e.preventDefault();
    history.push({
      pathname: '/login',
      state: { tab }
    })
  };

  return (
    <Animation.Fade timeout={300} in={visible} style={{display: 'flex'}}>
    {() => (
      <Menu>
        <MenuItem><Button small ghost onClick={goToLogin('register')}>Sign up</Button></MenuItem>
        <MenuItem><Button small secondary onClick={goToLogin('login')}>Login</Button></MenuItem>
      </Menu>
    )}
    </Animation.Fade>
  )
}

export default withRouter(UnauthenticatedNav)
