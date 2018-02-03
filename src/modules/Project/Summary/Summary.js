import React from 'react';

import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';

import Address from './components/Address';
import DateTime from './components/DateTime';
import Logistics from './components/Logistics';
import Items from './components/Items';
import AdditionalInfo from './components/AdditionalInfo';

import {
  SummaryBody,
  HeadingWrapper
} from './Styled';

const Summary = ({
  projectData: {
    configuration: { projectName, addresses, dateTime, logistics, items, notes }
  }
}) => {
  return (
    <div>
      <HeadingWrapper>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24}>
              <Heading wrapperTag="h1" size="md">
                {projectName}
              </Heading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </HeadingWrapper>
      <SummaryBody>
        <Address addresses={addresses} />
        <DateTime dateTime={dateTime} />
        <Logistics logistics={logistics} />
        <Items items={items} />
        <AdditionalInfo notes={notes} />
      </SummaryBody>
    </div>
  );
};

export default Summary;
