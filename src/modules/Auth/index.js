import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';
import mapImmutablePropsToPlainProps from '../../global/mapImmutablePropsToPlainProps';
import Auth from './Auth';
import { login } from './loginAction';

const mapStateToProps = (state, props) => {
  return {
    user: state.get('user')
  };
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login())
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  mapImmutablePropsToPlainProps
);

export default enhance(Auth);