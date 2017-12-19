import React from 'react';
import Icon from '../../../globalComponents/Icon';
import {
  ConversationHeaderCloseBtn
} from './Styled';

const ConversationHeader = ({
  goBack
}) => {
  return (
      <ConversationHeaderCloseBtn onClick={goBack}>
        <Icon icon="arrow-left" size="lg" />
      </ConversationHeaderCloseBtn>
  );
};

export default ConversationHeader;
