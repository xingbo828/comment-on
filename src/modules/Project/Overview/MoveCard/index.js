import { connect } from 'react-redux';
import { compose } from 'recompose';
import MoveCard from './MoveCard'
import inViewPort from '../../../Common/inViewPort';
import {
  getProjectUnreadCount
} from '../../../Common/NotificationCenter/notificationCenterReducers';


const mapStateToProps = (state, ownProps) =>  ({
  unreads: getProjectUnreadCount(state, ownProps.project.id),
});


const enhance = compose(
  connect(mapStateToProps),
  inViewPort({
    containerMinHeight: 350
  })
);

export default enhance(MoveCard);
