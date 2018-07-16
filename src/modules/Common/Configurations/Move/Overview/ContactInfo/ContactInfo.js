import React from 'react';

import { Heading } from '../../../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionHeaderEditLink,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent,
  SectionInvalid
} from '../Styled';

const ContactInfo = ({ contactInfo: { detail }, isValid, editPath, setValidationStatus }) => {
  setValidationStatus('ContactInfo', isValid)
  const renderInner = ( detail, isValid ) => {
    if (!isValid) {
      return (
        <SectionInvalid>Invalid contact information configuration.</SectionInvalid>
      );
    }
    const { name, email, phoneNumber } = detail;

    return (
      <SectionBody>
        <SectionBodyItem>
          <SectionBodyItemLabel>
             Name
          </SectionBodyItemLabel>
          <SectionBodyItemContent>{name}</SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>
             Phone number
          </SectionBodyItemLabel>
          <SectionBodyItemContent>{phoneNumber}</SectionBodyItemContent>
        </SectionBodyItem>
        <SectionBodyItem>
          <SectionBodyItemLabel>
             Email
          </SectionBodyItemLabel>
          <SectionBodyItemContent>{email}</SectionBodyItemContent>
        </SectionBodyItem>
      </SectionBody>
    );
  };

  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Contact Information
        </Heading>
        <SectionHeaderEditLink
          to={{ pathname: `${editPath}/contactInfo`, fromOverview: true }}
        >
          Edit
        </SectionHeaderEditLink>
      </SectionHeader>
      {renderInner(detail, isValid)}
    </Section>
  );
};

export default ContactInfo;
