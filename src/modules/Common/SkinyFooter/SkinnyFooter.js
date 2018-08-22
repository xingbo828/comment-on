import React from 'react'
import Grid from '../../../globalComponents/Grid'
import Box from '../../../globalComponents/Box'
import {
  Container,
  BrandLink,
  Menu,
  MenuItem,
  MenuItemLink
} from './Styled'


const SkinnyFooter = () => (
  <Container>
    <Grid.Container>
      <Grid.Row middle="md">
        <Grid.Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Menu>
            <MenuItem><MenuItemLink to="/">Privacy Policy</MenuItemLink></MenuItem>
            <MenuItem><MenuItemLink to="/">Terms of Use</MenuItemLink></MenuItem>
          </Menu>
        </Grid.Col>
        <Grid.Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <BrandLink to="/">Powered by In Need</BrandLink>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </Container>
)

export default SkinnyFooter