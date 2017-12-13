import React from 'react';
import Steps from '../../../../globalComponents/Steps';

const Step = Steps.Step;

const MoverEditSteps = ({current, history}) => {
  const stepClickHandler = (step) => {
    history.push({
      pathname: `/mover/edit/${step}`
    });
  };

  return (
    <Steps current={current} mode="free">

      <Step
        title="basic profile"
        onStepClick={stepClickHandler.bind(this, 'basic-profile')}
      />

      <Step
        title="crew members"
        onStepClick={stepClickHandler.bind(this, 'crew-member')}
      />

      <Step
        title="vehicles"
        onStepClick={stepClickHandler.bind(this, 'vehicles')}
      />

    </Steps>
  );
};

export default MoverEditSteps;





