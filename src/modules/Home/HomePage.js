import React from 'react';
import {
  Hero,
  ImagePlaceHolder,
  ButtonContainer,
  Logo,
  Header
} from './Styled';
import { Tiled } from './components/StepTiles'
import AddressSearchBar from './components/AddressSearchBar';
import Grid from '../../globalComponents/Grid';
import Box from '../../globalComponents/Box';
import Button from '../../globalComponents/Form/Button';
import ServiceLocation from '../../globalComponents/ServiceLocation';
import { 
  Heading, 
  Paragraph,
} from '../../globalComponents/MarketingTypography';

const HomePage = () => (
  <main>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col xsOffset={1} xs={22} smOffset={2} sm={20} md={20} mdOffset={2} lgOffset={0} lg={12}>
          <Hero vertical={{ lg:10, xs:4 }} between={10}>
            <Header inline>
              <Box>
                <Logo src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Flogos%2Flogo.png?alt=media&token=9240dc54-8a62-40eb-abf1-0816f4820f3e" />
              </Box>
              <Box between="2" inline>
                <Button secondary inline small>Login</Button>
              </Box>
            </Header>
            <Box between={4}>
              <Box>
                <Heading eyebrow="Need a mover?" wrapperTag="h1" size="lg">We'll find you the right one for the job</Heading>
              </Box>
              <Box>
                <AddressSearchBar />
              </Box>
            </Box>
          </Hero>
        </Grid.Col>
        <Grid.Col xs={24} sm={24} md={24} lg={12}>
          <Box vertical={10}>
            <ImagePlaceHolder />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <Box vertical={10}>
            <Heading eyebrow="It's easy" underlay="how" wrapperTag="h3" centered size="md">Here's how it works</Heading>
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Tiled/>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <Box vertical={10}>
            <Heading eyebrow="Service availability" underlay="where" wrapperTag="h3" centered size="md">Where we operate</Heading>
            <ServiceLocation />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col lg={12} lgOffset={6} md={12} mdOffset={6} sm={24} xs={24}>
          <Box between={6} vertical={10}>
            <Heading eyebrow="Moving somewhere?" underlay="easy" wrapperTag="h3" centered size="md">It's easier with Ineed</Heading>
            <Paragraph center>
              Lorem ipsum dolor sit amet, assum patrioque ei sit, invidunt dignissim quaerendum vis ut. At vis paulo eligendi petentium, cum munere impedit ea. Perfecto vituperatoribus sit te, forensibus scribentur conclusionemque at cum. 
            </Paragraph>
            <ButtonContainer>
              <Button primary>Get started</Button>
            </ButtonContainer>
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </main>
);

export default HomePage;
