import React from 'react';
import { Banner } from './Styled';
import AddressSearchBar from './components/AddressSearchBar';
import Grid from '../../globalComponents/Grid';
import { Heading } from '../../globalComponents/Typography';




const HomePage = () => (
  <Grid.Container fluid>
    <Banner>
      <Heading wrapperTag="h1">Your move. Made easy</Heading>
    </Banner>
    <AddressSearchBar />
  </Grid.Container>
);

export default HomePage;
