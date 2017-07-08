import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import * as firebase from 'firebase';
import mapImmutablePropsToPlainProps from '../../global/mapImmutablePropsToPlainProps';
import Login from './Login';
import { auth as firebaseAuth } from '../../firebaseClient';


const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile, email');
  firebaseAuth.signInWithRedirect(provider);
};

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithRedirect(provider);
};

const logout = () => {
  firebaseAuth.signOut();
};

const mapStateToProps = (state, props) => ({
  account: state.get('account')
});


const enhance = compose(
  withRouter,
  connect(mapStateToProps),
  withProps(props => ({
    facebookLogin,
    googleLogin,
    logout
  })),
  mapImmutablePropsToPlainProps
);

export default enhance(Login);
