import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import RegisterPanel from './RegisterPanel';
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
    },
    {
      field: 'confirm',
      validator: 'isRequired',
      message: 'This field is required'
    },
    {
      field: 'confirm',
      validator: 'matchPassword',
      message: 'Not matching password'
    }
  ],
  validators
);

const enhance = compose(
  reduxForm({
    form: 'account.register',
    validate,
    onSubmit: async (values, dispatch, props) => {
      try {
        const user = await firebaseAuth.createUserWithEmailAndPassword(
          values.get('email'),
          values.get('password')
        );
        await user.sendEmailVerification();
        message.success(`Account created. Verification email has been sent to ${values.get('email')}`, 5);
      } catch (error) {
        console.error(error);
        message.error(error.message, 10);
      }
    }
  })
);
export default enhance(RegisterPanel);
