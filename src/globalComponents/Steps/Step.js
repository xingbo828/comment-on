import React from 'react';
import { oneOfType, string, node } from 'prop-types';
import Icon from '../../globalComponents/Icon';
import { StepContainer, StepLabel, StepSeperatorWrapper, StepHighLightBar, StepTitle } from './Styled';

const Step = ({ index, title, status, onStepClick, ...rest }) => {
  const renderContent = (title) => {
      return (
        <StepLabel>
          <StepSeperatorWrapper>{status === 'completed' ? <Icon icon="check" />: `${(index + 1)}`}</StepSeperatorWrapper><StepTitle>. {title}</StepTitle>
        </StepLabel>
      );
  }

  const handleClick = (e) => {
    if(status === 'completed') {
      onStepClick(e);
    }
  }
  return (
    <StepContainer status={status} onClick={handleClick}>
      {renderContent(title)}
      <StepHighLightBar status={status} />
    </StepContainer>
  );
};

Step.propTypes = {
  title: oneOfType([string, node]).isRequired
};

export default Step;
