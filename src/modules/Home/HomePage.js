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
import { Heading, Eyebrow, Paragraph } from '../../globalComponents/MarketingTypography';

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

            <Tiled>
              <Tile>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              </Tile>

              <Tile>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              </Tile>

              <Tile>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              </Tile>
            </Tiled>
          </StepsContainer>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </div>
);

export default HomePage;
