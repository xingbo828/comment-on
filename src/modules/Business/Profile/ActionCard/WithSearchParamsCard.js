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

const WithSearchParamsCard = ({ isLoggedIn, location, history, cardDoneLoading=false,  }) => {

  const handleRequestMove = () => {
    if(!isLoggedIn) {
      //redirect back to login page
      const to = {
        pathname: '/login',
        search: `?redirect=${location.pathname}${location.search}`
      };
      return history.push(to);
    }

    console.log('logged in...');
  };

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
            <Button primary icon="arrow-right" onClick={handleRequestMove}>Request Move</Button>
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



