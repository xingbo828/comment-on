import { compose, branch, renderNothing, renderComponent, lifecycle, withStateHandlers } from 'recompose';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';

const enhance = compose(
  branch(props=> props.loginStatus === 'UNINIT', renderNothing),
  withStateHandlers(
    ({ initialVisibility = false }) => ({
      visible: initialVisibility,
    }),
    {
      fadeIn: ({ visible }) => () => ({
        visible: true,
      })
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.fadeIn();
    }
  }),
  branch(props=>!props.isLoggedIn, renderComponent(UnauthenticatedNav)),
);

export default enhance(AuthenticatedNav);
