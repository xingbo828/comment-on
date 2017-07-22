import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import ProfilePicture from './ProfilePicture';
import { uploadProfileImg } from './accountAction';
import { getUser } from  './accountReducer';

import { isRequired } from '../Common/validators';

const mapStateToProps = state => ({initialValues: getUser(state).user});

const mapDispatchToProps = dispatch => ({
  uploadProfileImage: (file, uid) => dispatch(uploadProfileImg(file, uid))
});


const validate = values => {
  const errors = {};
  if (!isRequired(values.get('photoURL'))) {
    errors.photoURL = 'Required';
  }
  return errors;
}


const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'profile.photo',
    onSubmit: (values, dispatch, props) => { return props.uploadProfileImage(values); },
    onSubmitSuccess: (result, dispatch, props) => { props.history.push('/'); },
    validate
  })
);

export default enhance(ProfilePicture);
