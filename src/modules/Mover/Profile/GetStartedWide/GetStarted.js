import React from 'react'
import Card from '../../../../globalComponents/Card'
import Button from '../../../../globalComponents/Form/Button'
import Box from '../../../../globalComponents/Box'
import {
  Heading,
  Paragraph
} from '../../../../globalComponents/Typography'
import {
  Container
} from './Styled'

class GetStarted extends React.Component {
  render() {
    const { handleClick } = this.props
    return (
      <Container>
        <Box vertical={9} below={0}>
          <Card>
            <Box inset={4}>
                <Box between={6}>
                  <Box between={7}>
                    <Box between={2}>
                      <Heading wrapperTag="h3" size="sm">Request a Quote</Heading>
                      <Paragraph>Average response time: 15 mins</Paragraph>
                    </Box>
                  </Box>
                  <Button primary squared onClick={handleClick}>
                    Get a Quote
                  </Button>
                </Box>
            </Box>
          </Card>
        </Box>
      </Container>
    )
  }
}

export default GetStarted
