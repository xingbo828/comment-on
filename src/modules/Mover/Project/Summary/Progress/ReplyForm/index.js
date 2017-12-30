import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import ReplyForm from './Reply';
import validators, { validateFunc } from '../../../../../Common/validators';
import {
  declineLead,
  replyToLead
} from '../../../projectActions';

const mapDispatchToProps = dispatch => ({
  declineLead: () => dispatch(declineLead()),
  replyToLead: () => dispatch(replyToLead())
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
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'mover.project.reply',
    validate,
    onSubmit: (values, dispatch, props) => {
    },
    onSubmitSuccess: (result, dispatch, props) => {
    },
    onSubmitFail: (errors, dispatch, submitError) => {
    }
  })
);

export default enhance(ReplyForm);
