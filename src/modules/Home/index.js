import React from 'react';
import { AddressAutoComplete } from '../../globalComponents/Form';
import { Container, Banner, AddressSearch } from './Styled';

const HomePage = () =>
  <Container>
    <Banner>
      <AddressSearch>
        <AddressAutoComplete placeholder="From" />
      </AddressSearch>
      <AddressSearch>
        <AddressAutoComplete placeholder="To" />
      </AddressSearch>
    </Banner>
  </Container>;

export default HomePage;
