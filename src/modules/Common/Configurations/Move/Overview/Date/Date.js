import React from 'react';

import { Heading } from '../../../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionHeaderEditLink,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemContent,
  SectionInvalid
} from '../Styled';

const Date = ({ date: { detail }, isValid, editPath, setValidationStatus }) => {
  setValidationStatus('Date', isValid)
  const renderInner = ( detail, isValid ) => {
    if (!isValid) {
      return (
        <SectionInvalid>Invalid date configuration.</SectionInvalid>
      );
    }
    const { pickUpDate } = detail;

    return (
      <SectionBody>
        <SectionBodyItem>
          <SectionBodyItemContent>
            {pickUpDate.map(p => <p key={p}>{p.format('dddd, MMMM, D, YYYY')}</p>)}
          </SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    );
  };

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Pick-up date(s)
        </Heading>
        <SectionHeaderEditLink
          to={{ pathname: `${editPath}/date`, fromOverview: true }}
        >
          Edit
        </SectionHeaderEditLink>
      </SectionHeader>
      {renderInner(detail, isValid)}
    </Section>
  );
};

export default Date;
