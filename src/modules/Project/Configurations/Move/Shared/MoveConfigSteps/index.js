import React from 'react';
import Steps from '../../../../../../globalComponents/Steps';

const Step = Steps.Step;

const MoveConfigSteps = ({current, history}) => {
  const stepClickHandler = (step) => {
    history.push({
      pathname: `/projects/configurations/move/${step}`,
      search: history.location.search
    });
  };

  return (
    <Steps current={current}>

      <Step
        title="addresses"
        onStepClick={stepClickHandler.bind(this, 'address')}
      />

      <Step
        title="date"
        onStepClick={stepClickHandler.bind(this, 'date')}
      />

      <Step
        title="logistics"
        onStepClick={stepClickHandler.bind(this, 'logistics')}
      />

      <Step
        title="items"
        onStepClick={stepClickHandler.bind(this, 'items')}
      />

      <Step
        title="overview"
        onStepClick={stepClickHandler.bind(this, 'overview')}
      />

    </Steps>
  );
};

export default MoveConfigSteps;





