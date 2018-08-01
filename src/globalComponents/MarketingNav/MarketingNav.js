import React from 'react'
import Button from '../../globalComponents/Form/Button'
import Link from '../../globalComponents/Link'
import Logo from '../../globalComponents/Logo';
import {
  Container,
  Menu,
  MenuList,
  MenuListItem,
  InnerContainer,
  LogoWrapper,
  InnerWrapper,
  Toggler
} from './Styled'
import Grid from '../Grid'

class MarketingNav extends React.Component {

  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state  = {
      visible: false
    }
  }

  toggleMenu() {
    console.log(this.state.visible)
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <Container>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <InnerContainer>
                <InnerWrapper>
                  <LogoWrapper>
                    <Logo />
                  </LogoWrapper>
                  <Toggler visible={this.state.visible} role="button" onClick={this.toggleMenu} />
                </InnerWrapper>
                <Menu visible={this.state.visible}>
                  <MenuList>
                    <MenuListItem><Link secondary href="test">Features</Link></MenuListItem>
                    <MenuListItem><Link secondary href="test">Pricing</Link></MenuListItem>
                    <MenuListItem><Link secondary href="test">Demo</Link></MenuListItem>
                    <MenuListItem><Link secondary href="test">Sign in</Link></MenuListItem>
                    <MenuListItem><Button secondary small>Register</Button></MenuListItem>
                  </MenuList>
                </Menu>
              </InnerContainer>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Container>
    )
  }
}

export default MarketingNav