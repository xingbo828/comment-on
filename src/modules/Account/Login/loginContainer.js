import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, withProps, branch, renderComponent, lifecycle } from 'recompose';
import * as firebase from 'firebase';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import Login from './Login';
import { auth as firebaseAuth } from '../../../firebaseClient';
import { getAccount } from '../accountReducer';
import Spin from '../../../globalComponents/Spin';
import message from '../../../globalComponents/Message';


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
  withProps(( {account }) => ({
    facebookLogin,
    googleLogin,
    isAuthenticated: account.status === 'AUTHENTICATED' && account.user.emailVerified,
    isAccountNotVerified: account.status === 'AUTHENTICATED' && !account.user.emailVerified,
    msgEmailVerificationError: () => {
      message.info('Thanks for registering. To complete the account activation, please click the link we sent to your email.', 0);
    }
  })),
  branch(
    props => props.account.status === 'UNINIT',
    renderComponent(Spin.FullScreenSpinner)
  ),
  lifecycle({
    componentDidMount() {
    if(this.props.isAccountNotVerified) {
      this.props.msgEmailVerificationError();
    }
    }
  })
);

export default enhance(Login);
