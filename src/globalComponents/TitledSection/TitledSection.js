import React from 'react'
import Box from '../Box'
import {
  Container,
  Title,
  Content
} from './Styled'

const TitledSection = ({ title, children }) => (
  <Container>
    <Box inline between={4} vertical={8}>
        <Title>
          <h3>{ title }</h3>
        </Title>
        <Content>
          { children }
        </Content>
    </Box>
  </Container>
)

export default TitledSection