import React from 'react';
import { Banner, InnerContainer } from './Styled';
import AddressSearchBar from './components/AddressSearchBar';
import Grid from '../../globalComponents/Grid';
import { Heading } from '../../globalComponents/Typography';
import withOpenConversation from '../Conversation/withOpenConversation';

const OpenConversationBtn = withOpenConversation('button');



const HomePage = () => (
  <Grid.Container fluid>
    <Grid.Row>
      <InnerContainer>
        <Banner>
          <Heading wrapperTag="h1">Your move. Made easy</Heading>
          <OpenConversationBtn  conversationId="test">Test messages</OpenConversationBtn>
        </Banner>
        <AddressSearchBar />
      </InnerContainer>
    </Grid.Row>
  </Grid.Container>
);

export default HomePage;
