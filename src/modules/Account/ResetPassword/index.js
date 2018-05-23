import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import { withRouter } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import validators, { validateFunc } from '../../Common/validators';
import { auth as firebaseAuth } from '../../../firebaseClient';
import message from '../../../globalComponents/Message';

const validate = validateFunc(
  [
    {
      field: 'email',
      validator: 'isRequired',
      message: 'This field is required'
    },
    {
      field: 'email',
      validator: 'isValidEmail',
      message: 'Not a valid Email address'
    }
  ],
  validators
);

const enhance = compose(
  withRouter,
  withProps(props => ({
    goBack: (e) => {
      e.preventDefault();
      props.history.goBack();
    }
  })),
  reduxForm({
    form: 'account.resetPassword',
    validate,
    onSubmit: async (values, dispatch, props) => {
      try {
      await firebaseAuth.sendPasswordResetEmail(values.get('email'));
      message.success('An email with link to reset your password has been sent to you.', 10);
      } catch(error) {
        message.error(error.message, 0)
      }
    }
  })
);
export default enhance(ResetPassword);
