import React from 'react';
import {
  Banner,
  InnerContainer,
  StepsContainer,
  Hero
} from './Styled';
import { Tile, Tiled } from './components/StepTiles'
import AddressSearchBar from './components/AddressSearchBar';
import Grid from '../../globalComponents/Grid';
import { Heading, Eyebrow } from '../../globalComponents/MarketingTypography';

const HomePage = () => (
  <div>
    <Hero>
      <InnerContainer>
        <Banner>
          <Eyebrow wrapperTag="h3" size="lg">Hey Vancouver!</Eyebrow>
          <Heading wrapperTag="h1" size="xl">We’ve made moving easy</Heading>
        </Banner>
        <AddressSearchBar />
      </InnerContainer>
    </Hero>
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <StepsContainer>
            <Tiled/>
          </StepsContainer>
            <Eyebrow wrapperTag="h4" size="md">Service availability</Eyebrow>
            <Heading wrapperTag="h3" size="md">Where we operate</Heading>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </div>
);

export default HomePage;
