import React from 'react'
import Grid from '../../../../globalComponents/Grid'
import { Heading, Paragraph } from '../../../../globalComponents/Typography'
import Button from '../../../../globalComponents/Form/Button'
import Box from '../../../../globalComponents/Box'
import { 
  Image,
  Card,
  Container
} from './Styled'

class Hero extends React.Component {


  render() {
    return (
      <Container>
        <Image />
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lgOffset={5} lg={14} xlOffset={5} xl={14} >
              <Card>
                <Box between={6}>
                  <Box between={3}>
                    <Heading size="md" wrapperTag="h1">We make moving easier for you and your customers.</Heading>
                    <Paragraph>Inneed provides moving and delivery companies with the tools you need to quickly and effectively connect with your customers and recieve service requests online.</Paragraph>
                  </Box>
                  <Box>
                    <div>
                      <Button inverted>Try the Demo</Button>
                    </div>
                  </Box>
                </Box>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Container>
    )
  }
}


export default Hero