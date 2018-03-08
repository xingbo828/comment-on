import React from 'react';

import Grid from '../../../globalComponents/Grid';
import { Heading } from '../../../globalComponents/Typography';
import Icon from '../../../globalComponents/Icon';
import Link from '../../../globalComponents/Link';
import PageHeader from '../../../globalComponents/Layout/PageHeader';
import Address from './components/Address';
import DateTime from './components/DateTime';
import Logistics from './components/Logistics';
import Items from './components/Items';
import AdditionalInfo from './components/AdditionalInfo';

import {
  SummaryBody
} from './Styled';

const Summary = ({
  projectData: {
    configuration: { projectName, addresses, dateTime, logistics, items, notes }
  },
  history
}) => {
  return (
    <div>
      <PageHeader>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col xs={24} sm={24} md={24} lg={24}>
              <Link secondary onClick={history.goBack}><Icon icon="arrow-left"/>&nbsp;&nbsp;Back</Link>
              <Heading wrapperTag="h1" size="md">
                {projectName}
              </Heading>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </PageHeader>
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
