import React from 'react';
import { oneOfType, string, node } from 'prop-types';
import Icon from '../../globalComponents/Icon';
import {
  StepContainer,
  StepLabel,
  StepSeperatorWrapper,
  StepHighLightBar,
  StepDot
} from './Styled';

const Step = ({ index, title, status, mode, onStepClick, ...rest }) => {
  const renderContent = title => {
    return (
      <StepLabel>
        {mode==='guided' && <StepSeperatorWrapper>
          {status === 'completed' ? <Icon icon="check" /> : `${index + 1}`}
        </StepSeperatorWrapper>}
        {mode==='guided' && <StepDot completed={status==='completed'}/>}
        {title}
      </StepLabel>
    );
  };

  const handleClick = e => {
    if (status === 'completed' || (mode==='free' && status !=='inProgress')) {
      onStepClick(e);
    }
  };
  return (
    <StepContainer status={status} mode={mode} onClick={handleClick}>
      {renderContent(title)}
      <StepHighLightBar status={status} />
    </StepContainer>
  );
};

Step.propTypes = {
  title: oneOfType([string, node]).isRequired
};

export default Step;
