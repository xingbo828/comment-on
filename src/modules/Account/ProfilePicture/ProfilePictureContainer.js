import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import ProfilePicture from './ProfilePicture';
import { uploadProfileImg } from '../accountAction';
import { getUser } from  '../accountReducer';
import { withSettingsContext } from '../../../globalComponents/Settings';

import { isRequired } from '../../Common/validators';

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
  withSettingsContext,
  reduxForm({
    form: 'profile.photo',
    onSubmit: (values, dispatch, props) =>  props.uploadProfileImage(values.get('photoURL')[0], props.initialValues.get('uid')),
    validate,
    onSubmitSuccess: (values, dispatch, props) => {
      props.toggleFormMode();
    }
  })
);

export default enhance(ProfilePicture);
