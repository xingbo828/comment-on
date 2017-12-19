import React from 'react';
import Icon from '../../../globalComponents/Icon';
import {
  ConversationHeaderContainer,
  GoBackBtn,
  HeaderTitleWrapper,
  HeaderTitle
} from './Styled';

const ConversationHeader = ({ goBack }) => {
  return (
    <ConversationHeaderContainer>
      <GoBackBtn onClick={goBack}>
        <Icon icon="arrow-left" size="lg" />
      </GoBackBtn>
      <HeaderTitleWrapper>
        <HeaderTitle>Project: L1XjIuZw3DreKbjP6xKL</HeaderTitle>
      </HeaderTitleWrapper>
    </ConversationHeaderContainer>
  );
};

export default ConversationHeader;
