import React from 'react';
import {
  Banner,
  InnerContainer,
  SectionContainer,
  Hero
} from './Styled';
import { Tiled } from './components/StepTiles'
import AddressSearchBar from './components/AddressSearchBar';
import Grid from '../../globalComponents/Grid';
import ServiceLocation from '../../globalComponents/ServiceLocation';
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
          <SectionContainer>
            <Tiled/>
          </SectionContainer>
          <SectionContainer>
            <Eyebrow wrapperTag="h4" centered size="md">Service availability</Eyebrow>
            <Heading wrapperTag="h3" centered size="md">Where we operate</Heading>
            <ServiceLocation />
          </SectionContainer>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </div>
);

export default HomePage;
