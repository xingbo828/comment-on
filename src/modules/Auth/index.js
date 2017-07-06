import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose';
import Auth from './Auth';
import { auth } from './authAction';

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(auth())
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Auth);