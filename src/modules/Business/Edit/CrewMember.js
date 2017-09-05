import React from 'react';
import { Field } from 'redux-form/immutable';
import { GridContainer } from '../../../globalComponents/Grid';
import CrewMemberManagement from '../Compontnets/CrewMemberManagement';

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
    <GridContainer>
      <form onSubmit={handleSubmit}>
        <Field onUpdate={updateBusiness} component={renderCrewMemberManagement} name="crewMembers" />
      </form>
    </GridContainer>
  );
};

export default CrewMember;
