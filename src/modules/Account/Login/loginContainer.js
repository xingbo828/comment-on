import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderComponent } from 'recompose';
import * as firebase from 'firebase';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Login from './Login';
import { auth as firebaseAuth } from '../../../firebaseClient';
import { getAccount } from '../accountReducer';
import Spin from '../../../globalComponents/Spin';

const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
  provider.addScope('email');
  firebaseAuth.signInWithRedirect(provider);
};

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
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
    renderComponent(Spin.FullScreenSpinner)
  )
);

export default enhance(Login);
