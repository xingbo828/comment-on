import React from 'react'
import Grid from '../../../globalComponents/Grid'
import Box from '../../../globalComponents/Box'
import {
  Container,
  BrandLink
} from './Styled'


const SkinnyFooter = () => (
  <Container>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Box vertical={6}>
            <div><BrandLink to="/">Powered by In Need</BrandLink></div>
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </Container>
)

export default SkinnyFooter