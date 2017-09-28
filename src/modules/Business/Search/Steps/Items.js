import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import {
  Button
} from '../../../../globalComponents/Form';
import { GridContainer } from '../../../../globalComponents/Grid';

const Items = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <GridContainer>
      <form onSubmit={handleSubmit}>
        <h2>Items Form</h2>
        <Button type="submit" primary>Next</Button>
      </form>
    </GridContainer>
  );
};

Items.propTypes = {

};

export default Items;
