import React from 'react';
import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';

import { Heading } from '../../../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionHeaderEditLink,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../Styled';


const Items = ({ items: { detail }, editPath, setValidationStatus }) => {
  setValidationStatus('Items', true)
  const renderItemsSubSection = (v, isLast=false) => {
    const data = Object.keys(v)
    .filter(f => v[f] !== '0' || v[f]=== '5+');
    return data
      .map((i, index)=> {
        return (
          <SectionBodyItem key={i} border={!isLast && (index <= data.length)}>
            <SectionBodyItemLabel>
              {capitalize(startCase(i))}
            </SectionBodyItemLabel>
            <SectionBodyItemContent>{v[i]}</SectionBodyItemContent>
          </SectionBodyItem>
        );
      });
  };

  const renderInner = (detail) => {
    if (
      isEmpty(detail.specialCare) &&
      isEmpty(detail.appliances) &&
      isEmpty(detail.decore)
    ) {
      return 'No items';
    }

    return (
      <SectionBody>
        {Object.keys(detail).filter(m=>m!=='otherItems').map((d, index) => {
          if(index!==Object.keys(detail).length -1) {
            return renderItemsSubSection(detail[d]);
          }
          return renderItemsSubSection(detail[d], true);
        })}
        {detail.otherItems && <SectionBodyItem>
          <SectionBodyItemLabel>
            Other items
          </SectionBodyItemLabel>
          <SectionBodyItemContent>{detail.otherItems}</SectionBodyItemContent>
        </SectionBodyItem>}
      </SectionBody>
    );
  };
  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Items
        </Heading>
        <SectionHeaderEditLink
          to={{ pathname:  `${editPath}/items`, fromOverview: true }}
        >
          Edit
        </SectionHeaderEditLink>
      </SectionHeader>
      {renderInner(detail)}
    </Section>
  );
};

export default Items;
