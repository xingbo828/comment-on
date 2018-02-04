import { connect } from 'react-redux';
import { isCompletedProfile } from '../Account/accountReducer';
import { compose } from 'recompose';
import mapImmutablePropsToPlainProps from './mapImmutablePropsToPlainProps';

const isProfileCompleted = (WrappedComponent) => {
  return compose(
      connect(state => isCompletedProfile(state)),
      mapImmutablePropsToPlainProps
    )(WrappedComponent);
};

export default isProfileCompleted;
