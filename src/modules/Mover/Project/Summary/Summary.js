import React from 'react';
import Grid from '../../../../globalComponents/Grid';
import { Heading } from '../../../../globalComponents/Typography';
import Progress from './Progress';

import {
  HeadingContainer,
  HeadingContainerInner,
  SummaryBody,
  SummaryReportContainer,
  SummaryActionFormContainer
} from './Styled';

import Address from '../../../Project/Summary/components/Address';
import DateTime from '../../../Project/Summary/components/DateTime';
import Logistics from '../../../Project/Summary/components/Logistics';
import Items from '../../../Project/Summary/components/Items';
import AdditionalInfo from '../../../Project/Summary/components/AdditionalInfo';

const MoverProjectSummary = ({
  summary: { summaryData },
  handleReply,
  handleDecline
}) => {
  const { addresses,
    dateTime,
    logistics,
    items,
    additionalNotes } = summaryData.configuration;

  return (
    <Grid.Container fluid>
      <HeadingContainer>
        <HeadingContainerInner>
          <Heading wrapperTag="h1">{summaryData.owner.displayName}</Heading>
        </HeadingContainerInner>
      </HeadingContainer>
      <SummaryBody>
        <SummaryActionFormContainer>
          <Progress projectSummary={summaryData}/>
        </SummaryActionFormContainer>
        <SummaryReportContainer>
          <Address addresses={addresses} />
          <DateTime dateTime={dateTime} />
          <Logistics logistics={logistics} />
          <Items items={items} />
          <AdditionalInfo notes={additionalNotes} />
        </SummaryReportContainer>

      </SummaryBody>
    </Grid.Container>
  );
};

export default MoverProjectSummary;
