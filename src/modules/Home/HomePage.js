import React from 'react';
import {
  ButtonContainer,
  Divider
} from './Styled';
import Grid from '../../globalComponents/Grid';
import Box from '../../globalComponents/Box';
import Button from '../../globalComponents/Form/Button';
import ServiceLocation from '../../globalComponents/ServiceLocation';
import Hero from './components/Hero'
import StepCard from '../../globalComponents/StepCard';
import { 
  Heading, 
  Paragraph
} from '../../globalComponents/MarketingTypography';

const HomePage = ({ navToGetStarted }) => (
  <main>
    <Hero />
    <Divider />
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <Box vertical={{ xs:6, lg:10 }}>
            <Heading eyebrow="It's easy" underlay="how" wrapperTag="h3" centered size="md">Here's how it works</Heading>
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col lg={8} md={8} sm={8} xs={24}>
          <StepCard 
            type="primary"
            number={1}
            src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FItems.png?alt=media&token=f17d90ea-4257-4adf-a42b-d2ea6b64ddeb" 
            eyebrow="Step 1"
            title="Tell us about your move"
            body="We give you all the tools you need to quickly determine the size and scope of your move."
            handleClick={navToGetStarted}
          />
        </Grid.Col>
        <Grid.Col lg={8} md={8} sm={8} xs={24}>
          <StepCard 
            type="secondary"
            number={2}
            src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FEstimates.png?alt=media&token=aad0ad8d-44c6-489a-b3bf-8ef7381923b5" 
            eyebrow="Step 2"
            title="Get free estimates"
            body="We'll provide you with the estimated moving costs from a variety of Movers."
            handleClick={navToGetStarted}
          />
        </Grid.Col>
        <Grid.Col lg={8} md={8} sm={8} xs={24}>
          <StepCard 
            type="tertiary"
            number={3}
            src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2FTrucks.png?alt=media&token=8931390d-b16c-4e90-b84c-4e01fafd18d7" 
            eyebrow="Step 3"
            title="Choose your mover"
            body="WOnce you're happy with your choice, we'll put you in touch. Easy as that!"
            handleClick={navToGetStarted}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    {/* <Tiled/> */}
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <Box vertical={{ xs:6, lg:10 }}>
            <Heading eyebrow="Service availability" underlay="where" wrapperTag="h3" centered size="md">Where we operate</Heading>
            <ServiceLocation />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col lg={12} lgOffset={6} md={12} mdOffset={6} sm={24} xs={24}>
          <Box between={6} vertical={{ xs:6, lg:10 }}>
            <Heading eyebrow="Moving somewhere?" underlay="easy" wrapperTag="h3" centered size="md">It's easier with Inneed</Heading>
            <Paragraph center>
              Inneed is the fastest and easiest way to find professional moving services in your area. We partner with a varietey of moving companys to help you choose a mover who fits your exact needs. To get started, click the link below.
            </Paragraph>
            <ButtonContainer>
              <Button primary onClick={navToGetStarted} >Get started</Button>
            </ButtonContainer>
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </main>
);

export default HomePage;
