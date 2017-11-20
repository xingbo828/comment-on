import React from 'react';
import Steps from '../../../../globalComponents/Steps';
import Icon from '../../../../globalComponents/Icon';

const Step = Steps.Step;

const SearchSteps = ({current, history}) => {
  console.log(history);
  const stepClickHandler = (step) => {
    history.push({
      pathname: `/business/search/configurations/${step}`,
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

    </Steps>
  );
};

export default SearchSteps;





