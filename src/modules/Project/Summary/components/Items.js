import React from 'react';
import capitalize from 'lodash/capitalize';
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import { Heading } from '../../../../globalComponents/Typography';

import {
  Section,
  SectionHeader,
  SectionBody,
  SectionBodyItem,
  SectionBodyItemLabel,
  SectionBodyItemContent
} from '../Styled';

const Items = ({ items }) => {
  const renderItemsSubSection = v => {
    return Object.keys(v)
      .filter(f => v[f] > 0)
      .map(i => {
        return (
          <SectionBodyItem key={i}>
            <SectionBodyItemLabel>
              {capitalize(startCase(i))}
            </SectionBodyItemLabel>
            <SectionBodyItemContent>{v[i]}</SectionBodyItemContent>
          </SectionBodyItem>
        );
      });
  };

  const renderInner = items => {
    if (
      isEmpty(items.specialCare) &&
      isEmpty(items.appliances) &&
      isEmpty(items.decore)
    ) {
      return 'No items';
    }

    return (
      <SectionBody>
        {renderItemsSubSection(items.specialCare)}
        {renderItemsSubSection(items.appliances)}
        {renderItemsSubSection(items.decore)}
      </SectionBody>
    );
  };
  return (
    <Section>
      <SectionHeader>
        <Heading wrapperTag="h2" size="sm">
          Items
        </Heading>
      </SectionHeader>
      {renderInner(items)}
    </Section>
  );
};

export default Items;
