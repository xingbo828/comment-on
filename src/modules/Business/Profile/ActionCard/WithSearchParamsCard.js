import React from 'react';
import Card from '../../../../globalComponents/Card';
import Spin from '../../../../globalComponents/Spin';
import { Paragraph } from '../../../../globalComponents/Typography';

import Estimate from './Estimate';
import {
  DescriptionList,
  Row
} from '../../../../globalComponents/DescriptionList';
import {
  Button
} from '../../../../globalComponents/Form';

import {
  Aside,
  CtaContainer
} from './Styled';

const { SpinContainer } = Spin;

const WithSearchParamsCard = ({ cardDoneLoading=false }) => {

  const renderContent = (available) => {
    if (available) {
      return (
        <div>
          <Estimate />
          <DescriptionList>
            <Row term="Key" definition="Value" />
            <Row term="Key" definition="Value" />
            <Row term="Key" definition="Value" />
          </DescriptionList>
          <CtaContainer>
            <Button primary icon="arrow-right">Request Move</Button>
          </CtaContainer>
        </div>
      );
    }
    return (
      <div>
        <Paragraph>
          The mover isn't available based on your search configuration
        </Paragraph>
        <CtaContainer>
          <Button primary icon="arrow-right">Reconfigure</Button>
        </CtaContainer>
      </div>
    );
  };

  return (
    <Aside>
      <Card>
        <SpinContainer style={{minHeight: '200px'}} loading={!cardDoneLoading}>
          {cardDoneLoading && renderContent(true)}
        </SpinContainer>
      </Card>
    </Aside>
  );
};

export default WithSearchParamsCard;



