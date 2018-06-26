import React from 'react';
import Layout from '../../../../globalComponents/Layout';
import { Button } from '../../../../globalComponents/Form';
import Icon from '../../../../globalComponents/Icon';

const { FormActions } = Layout.Form;

const overviewAction = ({ loginStatus,  isCompletedProfile, signIn, goBack, isOverviewValid }) => {
  return (
    <FormActions>
          {loginStatus === 'AUTHENTICATED' && isCompletedProfile && <Button
            style={{ float: 'right' }}
            type="submit"
            primary
            disabled={!isOverviewValid}
          >
            Find a mover <Icon icon="arrow-right" />
          </Button>}
          {loginStatus === 'NOT_AUTHENTICATED' && <Button
            style={{ float: 'right' }}
            primary
            onClick={signIn}
            disabled={!isOverviewValid}
          >
            Sign in to continue
          </Button>}
          {loginStatus === 'AUTHENTICATED' && !isCompletedProfile && <Button
            style={{ float: 'right' }}
            primary
            onClick={signIn}
            disabled={!isOverviewValid}
          >
            Update profile to continue
          </Button>}
          <Button style={{ float: 'left' }} ghost onClick={goBack}>
            <Icon icon="arrow-left" />Back
          </Button>
        </FormActions>
  );
};

export default overviewAction;
