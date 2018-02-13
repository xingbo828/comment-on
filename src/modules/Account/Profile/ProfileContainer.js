import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Profile from './Profile';
import includes from 'lodash/includes';
import {
  updateProfile
} from '../accountAction';
import { getUser } from '../accountReducer';
import { withSettingsContext } from '../../Common/Settings';
import validators, { validateFunc } from '../../Common/validators';
import message from '../../../globalComponents/Message';

const mapStateToProps = state => ({
  initialValues: getUser(state).user
});


const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile))
});

const validate = validateFunc(
  [
    {
      field: 'displayName',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'phoneNumber',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'phoneNumber',
      validator: 'isValidPhoneNumber',
      message: 'Invalid phone number'
    },
    {
      field: 'email',
      validator: 'isRequired',
      message: 'Required'
    },
    {
      field: 'email',
      validator: 'isValidEmail',
      message: 'Invalid email address'
    }
  ],
  validators
);

const enhance = compose(
  withRouter,
  withSettingsContext,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'account.profile',
    onSubmit: (values, dispatch, props) => {
      return props.updateProfile(values.toJS());
    },
    validate,
    onSubmitSuccess: (values, dispatch, props) => {
      debugger;
      if(includes(props.location.search, '?redirect=')) {
        const redirectTo = props.location.search.replace('?redirect=', '');
        return props.history.push(redirectTo);
      }

      message.success(`Account profile successfully updated.`);
    },
    onSubmitFail: (submitErr, dispatch, error) => {
      console.error(error);
      message.error(error.message, 0);
    }
  })
);

export default enhance(Profile);
