import { connect } from 'react-redux';
import { isLoggedin } from '../Account/accountReducer';
import { compose } from 'recompose';
import mapImmutablePropsToPlainProps from './mapImmutablePropsToPlainProps';

const isLoggedIn = (WrappedComponent) => {
  return compose(
      connect(state => isLoggedin(state)),
      mapImmutablePropsToPlainProps
    )(WrappedComponent);
};

export default isLoggedIn;
