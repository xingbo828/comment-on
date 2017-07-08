import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import mapImmutablePropsToPlainProps from '../../global/mapImmutablePropsToPlainProps';
import Profile from './Profile';
import { updateProfile } from './profileAction';
import uploadProfileImg from './profileImgAction';

const mapStateToProps = (state, props) => ({
  user: state.getIn(['account', 'user'])
});

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
