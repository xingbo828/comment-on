import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import Profile from './Profile';
import { updateProfile } from '../accountAction';
import { getUser } from  '../accountReducer';
import { withSettingsContext } from '../../Common/Settings';
import validators, { validateFunc } from '../../Common/validators';

const mapStateToProps = state => ({initialValues: getUser(state).user});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile))
});

const validate = validateFunc([{
  field: 'displayName',
  validator: 'isRequired',
  message: 'Required'
}, {
  field: 'email',
  validator: 'isValidEmail',
  message: 'Invalid email address'
}] ,validators);

const enhance = compose(
  withRouter,
  withSettingsContext,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'account.profile',
    onSubmit: (values, dispatch, props) => { return props.updateProfile(values); },
    validate,
    onSubmitSuccess: (values, dispatch, props) => {
      // debugger;
    }
  })
);

export default enhance(Profile);
