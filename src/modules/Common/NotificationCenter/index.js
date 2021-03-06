import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import {
  compose,
  lifecycle,
  withStateHandlers,
  branch,
  renderNothing,
  setDisplayName
} from 'recompose';
import isLoggedIn from '../isLoggedIn';
import { subscribeToNotifications } from './notificationCenterActions';
import { getTotalUnreadCount } from './notificationCenterReducers';
import NotificationCenter from './NotificationCenter';

const mapStateToProps = state => ({
  totalUnreadCount: getTotalUnreadCount(state)
});

const mapDispatchToProps = dispatch => ({
  subscribeToNotifications: projectIds =>
    dispatch(subscribeToNotifications(projectIds))
});

const enhance = compose(
  isLoggedIn,
  branch(props => !props.isLoggedIn, renderNothing),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    async componentDidMount() {
      if(this.props.user.projects && Object.keys(this.props.user.projects).length > 0) {
        const myProjectIds = Object.keys(this.props.user.projects);
        this.unsubscribe = await this.props.subscribeToNotifications(
          myProjectIds
        );
      }
    },
    async componentWillReceiveProps(nextProps) {

      if(!isEqual(this.props.user.projects, nextProps.user.projects)) {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
        const myProjectIds = Object.keys(nextProps.user.projects);
        this.unsubscribe = await this.props.subscribeToNotifications(
          myProjectIds
        );
      }

    },
    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }),
  withStateHandlers(
    ({ initIsOpen = false }) => ({
      isOpen: initIsOpen,
    }),
    {
      toggle: ({ isOpen }) => () => ({
        isOpen: !isOpen
      }),
      close: ({ isOpen }) => () => ({
        isOpen: false
      })
    }
  ),
  setDisplayName('NotificationCenter')
);

export default enhance(NotificationCenter);
