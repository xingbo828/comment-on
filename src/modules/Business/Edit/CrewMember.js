import React from 'react';
import { Field } from 'redux-form/immutable';
import {
  Button,
  TextField,
  TextArea,
  Checkbox
} from '../../../globalComponents/Form';
import { GridContainer } from '../../../globalComponents/Grid';
import CrewMemberManagement from '../Compontnets/CrewMemberManagement';

const CrewMember = ({
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting
}) => {
  return (
    <GridContainer>
      <form onSubmit={handleSubmit}>
        <CrewMemberManagement />
      </form>
    </GridContainer>
  );
};

export default CrewMember;
