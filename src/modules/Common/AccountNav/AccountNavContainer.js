import { compose, withProps } from 'recompose';
import AccountNav from './AccountNav';
import isLoggedIn from '../isLoggedIn';
import { auth } from '../../../firebaseClient';

const logout = () => {
  auth.signOut();
};

export default compose(
  isLoggedIn,
  withProps(props => ({
    logout
  }))
)(AccountNav);