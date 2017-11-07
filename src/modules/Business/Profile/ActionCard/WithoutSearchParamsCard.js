import React from 'react';
import Card from '../../../../globalComponents/Card';
import { Button } from '../../../../globalComponents/Form';
import { Aside, CtaContainer } from './Styled';

const WithoutSearchParamsCard = ({ match, history }) => {
  const clickHandler = () => {
    history.push({
      pathname: '/business/search/steps/address',
      state: {
        fromProfile: true,
        businessId: match.params.businessId
      }
    });
  };
  return (
    <Aside>
      <Card>
        <CtaContainer>
          <Button onClick={clickHandler} primary icon="arrow-right">
            Let's get started
          </Button>
        </CtaContainer>
      </Card>
    </Aside>
  );
};

export default WithoutSearchParamsCard;
