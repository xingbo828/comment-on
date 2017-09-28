import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderNothing } from 'recompose';
import * as firebase from 'firebase';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Login from './Login';
import { auth as firebaseAuth } from '../../../firebaseClient';
import { getAccount } from '../accountReducer';

const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile, email');
  firebaseAuth.signInWithRedirect(provider);
};

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithRedirect(provider);
};

const mapStateToProps = state => getAccount(state);


const enhance = compose(
  withRouter,
  connect(mapStateToProps),
  withProps(props => ({
    facebookLogin,
    googleLogin
  })),
  mapImmutablePropsToPlainProps,
  branch(
    props => props.account.status === 'UNINIT',
    renderNothing
  )
);

export default enhance(Login);
