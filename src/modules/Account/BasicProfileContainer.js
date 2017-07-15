import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import mapImmutablePropsToPlainProps from '../Common/mapImmutablePropsToPlainProps';
import BasicProfile from './BasicProfile';
import { updateProfile, uploadProfileImg } from './accountAction';
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

export default enhance(BasicProfile);
