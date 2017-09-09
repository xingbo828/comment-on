import React from 'react';
import { oneOfType, string, node } from 'prop-types';
import { StepContainer, StepWithIconWrapper, StepIconWrapper } from './Styled';

const Step = ({ title, icon, status, onStepClick, ...rest }) => {
  const renderContent = (title, icon) => {
    if (icon) {
      return (
        <StepWithIconWrapper {...rest}>
          <StepIconWrapper>{icon}</StepIconWrapper> {title}
        </StepWithIconWrapper>
      );
    }
    return title;
  }

  const handleClick = (e) => {
    if(status === 'completed') {
      onStepClick(e);
    }
  }
  return (
    <StepContainer status={status} onClick={handleClick}>
      {renderContent(title, icon)}
    </StepContainer>
  );
};

Step.propTypes = {
  title: oneOfType([string, node]).isRequired,
  icon: node
};

export default Step;
