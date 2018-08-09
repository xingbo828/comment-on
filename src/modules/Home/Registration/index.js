import { compose } from 'recompose';
import { withRouter } from 'react-router-dom'
import { reduxForm } from 'redux-form/immutable';
import Registration from './Registration';
import validators, { validateFunc } from '../../Common/validators';
import { submitRegistration } from './RegistrationActions' 
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
    },
    {
      field: 'name',
      validator: 'isRequired',
      message: 'This field is required'
    },
    {
      field: 'companyName',
      validator: 'isRequired',
      message: 'This field is required'
    }
  ],
  validators
);

const enhance = compose(
  withRouter,
  reduxForm({
    form: 'marketing.register',
    validate,
    onSubmit: async (values, dispatch, props) => {
      try {
        await submitRegistration(values.get('name'), values.get('companyName'), values.get('email'))
      } catch(error) {
        console.error(error)
        message.error(error.message, 10);
      }
    }
  })
);
export default enhance(Registration);
