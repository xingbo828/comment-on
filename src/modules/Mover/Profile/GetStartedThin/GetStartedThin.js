import React from 'react'
import { Field } from 'redux-form/immutable';
import Card from '../../../../globalComponents/Card'
import Button from '../../../../globalComponents/Form/Button'
import Responsive from '../../../../globalComponents/Responsive'
import Box from '../../../../globalComponents/Box'
import Grid from '../../../../globalComponents/Grid';
import Sticky from '../../../../globalComponents/Sticky';
import {
  Heading,
  Paragraph
} from '../../../../globalComponents/Typography'
import {
  Container,
  Messaging,
  Action
} from './Styled'


class GetStartedThin extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Container>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Box vertical={4} style={{ alignItems: 'center' }} inline>
                <Messaging between={1}>
                  <Heading wrapperTag="h3" size="sm">Get a Quote</Heading>
                  <Paragraph>Lorem ipsum.</Paragraph>
                </Messaging>
                <Action primary>
                  Get a Quote
                </Action>
              </Box>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Container>
    )
  }
}

export default GetStartedThin