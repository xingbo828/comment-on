import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import LoginPanel from './LoginPanel';

const enhance = compose(
  reduxForm({
    form: 'account.login',
    onSubmit: (values, dispatch, props) => {
    },
    onSubmitSuccess: async (result, dispatch, props) => {

    }
  })
);
export default enhance(LoginPanel);
