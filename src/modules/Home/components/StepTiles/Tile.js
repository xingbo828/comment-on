import React from 'react'
import Styled from 'styled-components'
import Grid from '../../../../globalComponents/Grid';
import Box from '../../../../globalComponents/Box';

const Container = Styled.div`
  background: ${props=>props.theme.colors.secondaryLight};
  width: 100%;

  &:nth-of-type(2n) {
    background: ${props=>props.theme.colors.primary};
  }

  &:nth-of-type(3n) {
    background: white;
  } 
`

const Tile = ({ children }) => {
  return (
    <Container>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col lg={12}>
            <Box vertical={8}>
              {children}
            </Box>
          </Grid.Col>
          <Grid.Col lg={12}>
            <Box vertical={8}>
              {children}
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Container>
  )
}

export default Tile