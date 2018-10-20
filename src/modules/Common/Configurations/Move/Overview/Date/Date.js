import React from 'react';

import { Heading } from '../../../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionHeaderEditLink,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemContent,
  SectionInvalid,
  SectionBodyItemLabel
} from '../Styled';

const Date = ({ date: { detail }, isValid, editPath, setValidationStatus }) => {
  console.log(detail)
  setValidationStatus('Date', isValid)
  const renderInner = ( detail, isValid ) => {
    if (!isValid) {
      return (
        <SectionInvalid>Invalid date configuration.</SectionInvalid>
      );
    }
    const { pickUpDate, storage } = detail;

    return (
      <SectionBody>
        <SectionBodyItem border>
          <SectionBodyItemContent>
            {pickUpDate.map(p => <p key={p}>{p.format('dddd, MMMM, D, YYYY')}</p>)}
          </SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>Storage</SectionBodyItemLabel>
          <SectionBodyItemContent>
            {storage === 'none' ? storage : storage.split('|')[1]}
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
