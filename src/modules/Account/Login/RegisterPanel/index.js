import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import RegisterPanel from './RegisterPanel';

const enhance = compose(
  reduxForm({
    form: 'account.register',
    onSubmit: (values, dispatch, props) => {
    },
    onSubmitSuccess: async (result, dispatch, props) => {

    }
  })
);
export default enhance(RegisterPanel);
