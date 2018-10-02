import React from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '../../../../globalComponents/Grid'
import { Heading, Paragraph } from '../../../../globalComponents/Typography'
import Button from '../../../../globalComponents/Form/Button'
import Box from '../../../../globalComponents/Box'
import { 
  ContentWrapper,
  Container
} from './Styled'
import Content from '../Content'

class Hero extends React.Component {

  constructor(props) {
    super(props)
    this.goTo = this.goTo.bind(this)
  }

  goTo() {
    this.props.history.push({
      pathname: Content.hero.link.href
    });
  }

  render() {
    return (
      <Container  src={Content.hero.image.src} >
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={14} xl={14} >
              <ContentWrapper>
                <Box between={6}>
                  <Box between={3}>
                    <Heading size="xl" wrapperTag="h1">{Content.hero.title}</Heading>
                    <Paragraph xl color="white">{Content.hero.body}</Paragraph>
                  </Box>
                  <Box>
                    <div>
                      <Button onClick={this.goTo} inverted>{Content.hero.link.title}</Button>
                    </div>
                  </Box>
                </Box>
              </ContentWrapper>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Container>
    )
  }
}


export default withRouter(Hero)