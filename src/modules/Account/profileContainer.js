import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import * as firebase from 'firebase';
import mapImmutablePropsToPlainProps from '../../global/mapImmutablePropsToPlainProps';
import Profile from './Profile';
import { updateProfile } from './profileAction';

const mapStateToProps = (state, props) => ({
  user: state.getIn(['account', 'user'])
});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(updateProfile(profile))
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  mapImmutablePropsToPlainProps
);

export default enhance(Profile);
