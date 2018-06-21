import React from 'react'
import AddressSearchBar from '../AddressSearchBar';
import Grid from '../../../../globalComponents/Grid';
import Box from '../../../../globalComponents/Box';
import {
  HeroImage,
  HeroMessage,
  HeroDescription,
  ImageContainer,
  Tagline,
  Heading
} from './Styled';

const Hero = () => (
  <Grid.Container>
    <Grid.Row middle="md">
      <Grid.Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Box vertical={{ lg:12, xs:8 }} below={0}>
          <ImageContainer>
            <HeroImage src="https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fgui%2Fmarketing%2Fmoving_items.png?alt=media&token=220f1519-9a71-46cf-b9dc-c9394bcd233f" />
          </ImageContainer>
        </Box>
      </Grid.Col>
      <Grid.Col first="lg" xs={24} sm={24} md={24} lg={12} xl={12}>
        <Box vertical={{ lg:12 }} below={{ lg:12, xs: 8 }} horizontal={{ xs: 0, sm:8 ,md:10, lg:0 }} between={10}>
          <Box between={{ xs:0, lg:8 }}>
            <Box between={{ lg:4 }}>
              <HeroMessage>
                <Box between={2}>
                  <Tagline>Need a mover?</Tagline>
                  <Heading>We'll find you the right one for the job</Heading>
                </Box>
              </HeroMessage>
              <HeroDescription>
                <Box vertical={{ xs:3, md:0}} below={{ xs: 0, md: 0 }}>
                  <p>
                    Inneed is the fastest and easiest way to find professional movers in your area. We partner with a variety of moving companys to help you choose a mover who fits your exact needs.
                  </p>
                </Box>
              </HeroDescription>
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