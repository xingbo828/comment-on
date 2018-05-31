import React from 'react'
import AddressSearchBar from '../AddressSearchBar';
import Grid from '../../../../globalComponents/Grid';
import Box from '../../../../globalComponents/Box';
import {
  ImagePlaceHolder,
  ThinHeroMessage,
  WideHeroMessage,
  ImageContainer,
  Tagline,
  Heading,
  Description
} from './Styled';

const Hero = () => (
  <Grid.Container>
    <Grid.Row middle="md">
      <Grid.Col xs={24} sm={24} md={24} lg={12}>
        <Box between={0} vertical={{ lg:10, xs: 8}} below={{ lg:10, xs: 0}}>
          <ImageContainer>
            <ImagePlaceHolder />
            <ThinHeroMessage>
              <Box between={2}>
                <Tagline>Need a mover?</Tagline>
                <Heading>We'll find you the right one for the job</Heading>
              </Box>
            </ThinHeroMessage>
          </ImageContainer>
        </Box>
      </Grid.Col>
      <Grid.Col first="lg"  xs={24} sm={24} md={24} lg={12}>
        <Box vertical={{ lg:10, xs:0 }} between={10}  below={{ lg:0, xs: 10 }}>
          <Box between={{ xs:0, lg:8 }}>
            <Box>
              <WideHeroMessage>
                <Box between={3}>
                  <Tagline>Need a mover?</Tagline>
                  <Heading>We'll find you the right one for the job</Heading>
                  <Description>
                    Inneed is the fastest and easiest way to find professional movers in your area. We partner with a varietey of moving companys to help you choose a mover who fits your exact needs. To get started, tell us where you're moving below.
                  </Description>
                </Box>
              </WideHeroMessage>
            </Box>
            <Box>
              <AddressSearchBar />
            </Box>
          </Box>
        </Box>
      </Grid.Col>
    </Grid.Row>
  </Grid.Container>
)

export default Hero