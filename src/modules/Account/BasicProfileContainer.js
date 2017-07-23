import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import BasicProfile from './BasicProfile';
import { updateProfile } from './accountAction';
import { getUser } from  './accountReducer';

import { isRequired, isValidEmail, isValidBirthDate } from '../Common/validators';

const mapStateToProps = state => ({initialValues: getUser(state).user});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile))
  // uploadProfileImage: (file, uid) => dispatch(uploadProfileImg(file, uid))
});


const validate = values => {
  const errors = {};
  if (!isRequired(values.get('displayName'))) {
    errors.displayName = 'Required';
  }
  if (!isValidEmail(values.get('email'))) {
     errors.email = 'Invalid email address';
  }
  if (!isValidBirthDate(values.get('birthdate'))) {
    errors.birthdate = 'Invalid Birth date';
  }
  return errors;
}


const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'profile.basic',
    onSubmit: (values, dispatch, props) => { return props.updateProfile(values); },
    onSubmitSuccess: (result, dispatch, props) => { props.history.push('/'); },
    validate
  })
);

export default enhance(BasicProfile);
