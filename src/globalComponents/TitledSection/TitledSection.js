import React from 'react'
import Box from '../Box'
import Heading from '../Typography/Heading'
import {
  Container,
  Title,
  Content
} from './Styled'

const TitledSection = ({ title, children }) => (
  <Container>
    <Box inline="md" between={4} vertical={9}>
        <Title>
          <Heading wrapperTag="h3" size="xs">{ title }</Heading>
        </Title>
        <Content>
          { children }
        </Content>
    </Box>
  </Container>
)

export default TitledSection