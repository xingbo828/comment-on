import React from 'react';
import { Field } from 'redux-form/immutable';
import Grid from '../../../../globalComponents/Grid';
import { Button } from '../../../../globalComponents/Form';
import CrewMemberManagement from './CrewMemberManagement';
import Icon from '../../../../globalComponents/Icon';
import Layout from '../../../../globalComponents/Layout';
import { Heading } from '../../../../globalComponents/Typography';

const renderCrewMemberManagement = ({ input, ...rest }) => {
  const pureValue = (input.value.toJS && input.value.toJS()) || input.value;
  return (
    <CrewMemberManagement
      members={pureValue}
      onUpdate={input.onChange}
      {...rest}
    />
  );
};

const { Container } = Grid;

const { Form, FormActions, FormHeading, FormInner } = Layout.Form;

const CrewMember = ({
  handleSkip,
  handleSubmit,
  pristine,
  reset,
  valid,
  submitting,
  updateBusiness
}) => {
  return (
    <Container>
      <FormHeading>
        <Heading wrapperTag="h1">Crew Members</Heading>
      </FormHeading>
      <Form onSubmit={handleSubmit}>
        <FormInner>
          <Field component={renderCrewMemberManagement} name="crewMembers" />
        </FormInner>
        <FormActions>
          <Button
            style={{ float: 'right', marginLeft: '1rem' }}
            type="submit"
            primary
            disabled={submitting || pristine || !valid}
          >
            Update <Icon icon="pencil" />
          </Button>
          <Button style={{ float: 'right' }} ghost onClick={handleSkip}>
            Skip <Icon icon="angle-double-right" />
          </Button>
        </FormActions>
      </Form>
    </Container>
  );
};

export default CrewMember;
