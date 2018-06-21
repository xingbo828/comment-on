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
import { AddressAutoComplete } from '../../../../globalComponents/Form';
import {
  Container
} from './Styled'

const renderMoveAddress = ({ input, label, ...rest, placeholder }) => (
  <AddressAutoComplete
    onSelect={input.onChange}
    placeholder={placeholder}
    label={label}
    bordered
    {...rest}
  />
)

class GetStarted extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Container>
        <Box vertical={9} below={0}>
          <Card>
            <Box inset={4}>
              <form onSubmit={handleSubmit}>
                <Box between={6}>
                  <Box between={2}>
                    <Heading wrapperTag="h3" size="sm">Request a Quote</Heading>
                    <Paragraph>Average response time: 15 mins</Paragraph>
                  </Box>
                  <Box between={4}> 
                    <Field
                      component={renderMoveAddress}
                      name="pickUpAddress"
                      label="Pick-up address"
                    />
                    <Field
                      component={renderMoveAddress}
                      label="Delivery address"
                      name="deliveryAddress"
                    />
                  </Box>
                  <Button primary>
                    Continue
                  </Button>
                </Box> 
              </form>
            </Box>
          </Card>
        </Box>
      </Container>
    )
  }
}

export default GetStarted