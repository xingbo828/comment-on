import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LoginPanel from './LoginPanel';
import validators, { validateFunc } from '../../../Common/validators';
import { auth as firebaseAuth } from '../../../../firebaseClient';
import message from '../../../../globalComponents/Message';

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
    },
    {
      field: 'password',
      validator: 'isRequired',
      message: 'This field is required'
    },
    {
      field: 'password',
      validator: 'isValidPassword',
      message: 'Password need to be at least 6 characters long'
    }
  ],
  validators
);

const enhance = compose(
  reduxForm({
    form: 'account.login',
    validate,
    onSubmit: async (values, dispatch, props) => {
      try {
        await firebaseAuth.signInWithEmailAndPassword(values.get('email'), values.get('password'));
      } catch(error) {
        console.error(error)
        message.error(error.message, 10);
      }
    }
  })
);
export default enhance(LoginPanel);
