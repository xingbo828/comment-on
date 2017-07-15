import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable'
import BasicProfile from './BasicProfile';
import { updateProfile } from './accountAction';
import { getUser } from  './accountReducer';

const mapStateToProps = state => ({initialValues: getUser(state).user});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile))
  // uploadProfileImage: (file, uid) => dispatch(uploadProfileImg(file, uid))
});


const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'profile.basic'
  })
);

export default enhance(BasicProfile);
