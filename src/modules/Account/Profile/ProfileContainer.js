import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle, shouldUpdate } from 'recompose';
import { reduxForm, formValues } from 'redux-form/immutable';
import Profile from './Profile';
import {
  updateProfile,
  sendEmailConfirmation,
  dismissEmailConfirmation
} from '../accountAction';
import { getUser, getEmailConfirmationVisible } from '../accountReducer';
import { withSettingsContext } from '../../Common/Settings';
import validators, { validateFunc } from '../../Common/validators';
import message from '../../../globalComponents/Message';

const mapStateToProps = state => ({
  initialValues: getUser(state).user,
  isEmailConfirmationVisible: getEmailConfirmationVisible(state)
});


const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile)),
  sendEmailConfirmation: () => dispatch(sendEmailConfirmation()),
  dismissEmailConfirmation: () => dispatch(dismissEmailConfirmation())
});

const validate = validateFunc(
  [
    {
      field: 'displayName',
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
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.isEmailConfirmationVisible) {
        message.info(
          `A confirmation email has been sent to your inbox.`,
          0,
          this.props.dismissEmailConfirmation
        );
      }
    }
  }),
  shouldUpdate((props, nextProps) => {
    return props.initialValues !== nextProps.initialValues;
  }),
  reduxForm({
    form: 'account.profile',
    onSubmit: (values, dispatch, props) => {
      return props.updateProfile(values.toJS());
    },
    validate,
    onSubmitSuccess: (values, dispatch, props) => {
      message.success(`Account profile successfully updated.`);
    },
    onSubmitFail: (submitErr, dispatch, error) => {
      message.error(error.message, 0);
    }
  }),
  formValues({'currentEmailValue': 'email'})
);

export default enhance(Profile);
