import React from 'react';
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
        <Button type="submit" icon="arrow-right" primary>Next</Button>
      </form>
    </GridContainer>
  );
};

Items.propTypes = {

};

export default Items;
