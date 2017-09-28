import React from 'react';
import Steps from '../../../../../globalComponents/Steps';
import Icon from '../../../../../globalComponents/Icon';

const Step = Steps.Step;

const SearchSteps = ({current, history}) => {

  const stepClickHandler = (step) => {
    history.push({
      pathname: `/business/search/steps/${step}`
    });
  };

  return (
    <Steps current={current}>

      <Step
        icon={<Icon icon="map-marker" />}
        title="addresses"
        onStepClick={stepClickHandler.bind(this, 'address')}
      />

      <Step
        icon={<Icon icon="truck" />}
        title="items"
        onStepClick={stepClickHandler.bind(this, 'items')}
      />

      <Step
        icon={<Icon icon="calendar" />}
        title="date"
        onStepClick={stepClickHandler.bind(this, 'date')}
      />

      <Step
        icon={<Icon icon="users" />}
        title="logistics"
        onStepClick={stepClickHandler.bind(this, 'logistics')}
      />

    </Steps>
  );
};

export default SearchSteps;





