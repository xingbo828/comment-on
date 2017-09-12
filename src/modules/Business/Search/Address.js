import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../globalComponents/Form';
import SearchSteps from './components/SearchSteps';
import { GridContainer } from '../../../globalComponents/Grid';

const Address = ({
  history,
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <GridContainer>
      <SearchSteps current={0} history={history} />
      <form onSubmit={handleSubmit}>
        <Button type="submit" primary>Next</Button>
      </form>
    </GridContainer>
  );
};

Address.propTypes = {

};

export default Address;
