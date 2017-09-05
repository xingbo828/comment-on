import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import CrewMember from './CrewMember';

const enhance = compose(
  withRouter,
  reduxForm({
    form: 'business.edit.crewMember'
  })
);

export default enhance(CrewMember);
