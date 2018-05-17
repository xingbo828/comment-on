import React from 'react'
import Styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import Button from '../../../globalComponents/Form/Button';
import Sticky from '../../../globalComponents/Sticky';
import Logo from '../../../globalComponents/Logo';


const Container = Styled.nav`
  background: rgba(255, 255, 255, 1);
  z-index: 500;
  padding: 0 1.5rem;
  display: flex;
  width: 100%;
  height: 100px;
  line-height: 100px;
  transition: .3s;
  border-bottom: 1px solid transparent;

  ul {
    opacity: 0;
  }


  ${props=>props.isFixed && `
    border-bottom: 1px solid ${props.theme.colors.border};

    ul {
      opacity: 1;
    }
  `}
`

const Menu = Styled.ul`
  display: flex;
  transition: .3s;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const MenuItem = Styled.li`
  margin: 0;
  padding: 0 0 0 1rem;
  flex:1
`

const LogoWrapper = Styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const UnauthenticatedNav = ({ history }) => {

  const goToLogin = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/login'
    })
  };

  const goToConfigure = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/projects/configurations/move/address'
    })
  };

  return (
    <Sticky>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Menu>
          <MenuItem><Button small outline onClick={goToLogin}>Login / Sign up</Button></MenuItem>
          <MenuItem><Button small primary onClick={goToConfigure}>Get started</Button></MenuItem>
        </Menu>
      </Container>
    </Sticky>
  )
}

export default withRouter(UnauthenticatedNav)