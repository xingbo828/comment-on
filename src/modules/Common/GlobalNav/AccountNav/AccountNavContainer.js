import { compose, withProps, renderNothing, branch } from 'recompose';
import AccountNav from './AccountNav';
import isLoggedIn from '../../isLoggedIn';
import { auth } from '../../../../firebaseClient';

const logout = () => {
  auth.signOut();
};

export default compose(
  isLoggedIn,
  withProps(props => ({
    logout
  })),
  branch(
    props => props.loginStatus === 'UNINIT',
    renderNothing
  )
)(AccountNav);
