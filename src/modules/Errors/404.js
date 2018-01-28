import React from 'react';
import Grid from '../../globalComponents/Grid';
import { Heading } from '../../globalComponents/Typography';

const Error404 = () => (
  <Grid.Container fluid>
    <Grid.Row>
          <Heading wrapperTag="h1">Page not found.</Heading>
    </Grid.Row>
  </Grid.Container>
);

export default Error404;
