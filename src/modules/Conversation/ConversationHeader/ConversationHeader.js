import React from 'react';
import Icon from '../../../globalComponents/Icon';
import {
  ConversationHeaderContainer,
  GoBackBtn
} from './Styled';

const ConversationHeader = ({ goBack }) => {
  return (
    <ConversationHeaderContainer>
      <GoBackBtn onClick={goBack}>
        <Icon icon="arrow-left" size="lg" />
      </GoBackBtn>
    </ConversationHeaderContainer>
  );
};

export default ConversationHeader;
