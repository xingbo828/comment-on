import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ReplyForm from './Reply';
import validators, { validateFunc } from '../../../../../Common/validators';
import {
  declineLead,
  replyToLead
} from '../../../projectActions';

const mapDispatchToProps = dispatch => ({
  declineLead: (projectId) => dispatch(declineLead(projectId)),
  replyToLead: (data) => dispatch(replyToLead(data))
});

const validate = validateFunc(
  [
    {
      field: 'estimatedPrice',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'estimatedPrice',
      validator: 'isValidCurrency',
      message: 'Not valid price'
    }
  ],
  validators
);

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withProps((props) => ({
    decline: (e) => {
      e.preventDefault();
      const projectId = props.match.params.projectId;
      return props.declineLead(projectId);
    }
  })),
  reduxForm({
    form: 'mover.project.reply',
    validate,
    onSubmit: (values, dispatch, props) => {
      const projectId = props.match.params.projectId;
      return props.replyToLead({
        projectId,
        estimatedPrice: values.get('estimatedPrice'),
        notes: values.get('notes')
      });
    },
    onSubmitSuccess: (result, dispatch, props) => {
    },
    onSubmitFail: (errors, dispatch, submitError) => {
    }
  })
);

export default enhance(ReplyForm);
