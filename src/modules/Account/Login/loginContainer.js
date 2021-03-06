import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderComponent } from 'recompose';
import * as firebase from 'firebase';
import get from 'lodash/get';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Login from './Login';
// import AccountVerificationPanel from './AccountVerificationPanel'
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
  mapImmutablePropsToPlainProps,
  withProps(( {account, location }) => ({
    facebookLogin,
    googleLogin,
    isAuthenticated: account.status === 'AUTHENTICATED',
    activeTabKey: get(location, 'state.tab') || 'login'
    // isAuthenticated: account.status === 'AUTHENTICATED' && account.user.emailVerified,
    // isAccountNotVerified: account.status === 'AUTHENTICATED' && !account.user.emailVerified
    // msgEmailVerificationError: () => {
    //   message.info('Thanks for registering. To complete the account activation, please click the link we sent to your email.', 0);
    // }
  })),
  branch(
    props => props.account.status === 'UNINIT',
    renderComponent(Spin.FullScreenSpinner)
  ),
  // branch(props => props.isAccountNotVerified, renderComponent(AccountVerificationPanel))
);

export default enhance(Login);
