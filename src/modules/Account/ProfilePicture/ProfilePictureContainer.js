import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import ProfilePicture from './ProfilePicture';
import { uploadProfileImg } from '../accountAction';
import { getUser } from  '../accountReducer';
import { withSettingsContext } from '../../Common/Settings';

import validators, { validateFunc } from '../../Common/validators';

const mapStateToProps = state => ({initialValues: getUser(state).user});

const mapDispatchToProps = dispatch => ({
  uploadProfileImage: (file, uid) => dispatch(uploadProfileImg(file, uid))
});

const validate = validateFunc([{
  field: 'photoURL',
  validator: 'isRequired',
  message: 'Required'
}] ,validators);

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withSettingsContext,
  reduxForm({
    form: 'profile.photo',
    onSubmit: (values, dispatch, props) =>  {
      return props.uploadProfileImage(values.get('photoURL'), props.initialValues.get('uid'))
    },
    validate,
    onSubmitSuccess: (values, dispatch, props) => {
      props.toggleFormMode();
    }
  })
);

export default enhance(ProfilePicture);
