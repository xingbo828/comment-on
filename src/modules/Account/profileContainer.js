import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import mapImmutablePropsToPlainProps from '../Common/mapImmutablePropsToPlainProps';
import Profile from './Profile';
import { updateProfile } from './profileAction';
import uploadProfileImg from './profileImgAction';
import { getUser } from  './accountReducer';

const mapStateToProps = state => getUser(state);

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile)),
  uploadProfileImage: (file, uid) => dispatch(uploadProfileImg(file, uid))
});


const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  mapImmutablePropsToPlainProps
);

export default enhance(Profile);
