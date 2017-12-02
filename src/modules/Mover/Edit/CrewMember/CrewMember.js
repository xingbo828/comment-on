import React from 'react';
import { Field } from 'redux-form/immutable';
import Grid from '../../../../globalComponents/Grid';
import CrewMemberManagement from '../../components/CrewMemberManagement';

const renderCrewMemberManagement = ({ input, onUpdate, ...rest }) => {
  return <CrewMemberManagement members={input.value}  onUpdate={onUpdate} {...rest} />;
}

const CrewMember = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  updateBusiness
}) => {
  return (
    <Grid.Container>
      <form onSubmit={handleSubmit}>
        <Field onUpdate={updateBusiness} component={renderCrewMemberManagement} name="crewMembers" />
      </form>
    </Grid.Container>
  );
};

export default CrewMember;
