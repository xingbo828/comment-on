import React from 'react';
import { Banner, InnerContainer } from './Styled';
import AddressSearchBar from './components/AddressSearchBar';
import Grid from '../../globalComponents/Grid';
import { Heading } from '../../globalComponents/Typography';




const HomePage = () => (
  <Grid.Container fluid>
    <Grid.Row>
      <InnerContainer>
        <Banner>
          <Heading wrapperTag="h1">Your move. Made easy</Heading>
        </Banner>
        <AddressSearchBar />
      </InnerContainer>
    </Grid.Row>
  </Grid.Container>
);

export default HomePage;
