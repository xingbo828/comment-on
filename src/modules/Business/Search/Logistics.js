import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Steps from '../../../globalComponents/Steps';
import {
  Button
} from '../../../globalComponents/Form';
import SearchSteps from './components/SearchSteps';
import { GridContainer } from '../../../globalComponents/Grid';

const Logistics = ({
  history,
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <GridContainer>
      <SearchSteps current={3} history={history} />
      <form onSubmit={handleSubmit}>
        <Button type="submit" primary>Next</Button>
      </form>
    </GridContainer>
  );
};

Logistics.propTypes = {

};

export default Logistics;
