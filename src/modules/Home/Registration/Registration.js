import React from 'react'
import { Field } from 'redux-form/immutable';
import Grid from '../../../globalComponents/Grid' 
import MarketingNav from '../../../globalComponents/MarketingNav'
import Box from '../../../globalComponents/Box'
import {
  TextField
} from '../../../globalComponents/Form'
import { Paragraph, ThematicBreak, Heading } from '../../../globalComponents/Typography';
import Button from '../../../globalComponents/Form/Button';

const Registration = ({ handleSubmit, history }) => {

  const handleRegistration = async (e) => {
    e.preventDefault();
    // TODO: Need to handle errors?
    await handleSubmit()
    history.push({
      pathname: '/register/success'
    })
  }

  return (
    <React.Fragment>
      <MarketingNav />
      <Grid.Container limitWidth>
        <Grid.Row>
          <Grid.Col xs={24} sm={24} md={24} lgOffset={6} lg={12} xlOffset={6} xl={12}>
            <Box vertical={12}>
              <Box vertical={3} between={3} >
                <Heading wrapperTag="h1">Hello there!</Heading>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</Paragraph>
              </Box>
              <ThematicBreak short />
              <form onSubmit={handleRegistration} >
                <Box vertical={3}>
                  <Field 
                    component={TextField}
                    label="Your name"
                    name="name"
                  />
                  <Field 
                    component={TextField}
                    label="Company name"
                    name="companyName"
                  />
                  <Field 
                    component={TextField}
                    label="Email"
                    name="email"
                  />
                </Box>
                <Box vertical={4} bottom={0}>
                  <div><Button type="submit" primary>Get in touch</Button></div>
                </Box>
              </form>
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </React.Fragment>
  )
}

export default Registration