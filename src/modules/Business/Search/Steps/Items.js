import React from 'react';
import {
  Button
} from '../../../../globalComponents/Form';
import Grid from '../../../../globalComponents/Grid';

const Items = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <Grid.Container>
      <form onSubmit={handleSubmit}>
        <h2>Items Form</h2>
        <Button type="submit" icon="arrow-right" primary>Next</Button>
      </form>
    </Grid.Container>
  );
};

Items.propTypes = {

};

export default Items;
