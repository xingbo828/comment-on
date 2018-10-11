import React from 'react'
import Card from '../../../../globalComponents/Card'
import Button from '../../../../globalComponents/Form/Button'
import Box from '../../../../globalComponents/Box'
import {
  Paragraph
} from '../../../../globalComponents/Typography'
import {
  Container,
  Message
} from './Styled'

class GetStarted extends React.Component {
  render() {
    const { handleClick } = this.props
    return (
      <Container>
        <Card>
          <Box inset={4}>
            <Button primary squared onClick={handleClick}>
              Get a Quote
            </Button>
          </Box>
          <Message>
            <Box inset={3}>
              <Paragraph>It’s free with no obligations</Paragraph>
            </Box>
          </Message>
        </Card>
      </Container>
    )
  }
}

export default GetStarted
