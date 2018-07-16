import React from 'react';
import Layout from '../../../globalComponents/Layout';
import { Button } from '../../../globalComponents/Form';
import Icon from '../../../globalComponents/Icon';

const { FormActions } = Layout.Form;

const overviewAction = ({ goBack, isOverviewValid }) => {
  return (
    <FormActions>
      <Button
        style={{ float: 'right' }}
        type="submit"
        primary
        disabled={!isOverviewValid}
      >
        Submit <Icon icon="arrow-right" />
      </Button>
      <Button style={{ float: 'left' }} ghost onClick={goBack}>
        <Icon icon="arrow-left" />Back
      </Button>
    </FormActions>
  );
};

export default overviewAction;
