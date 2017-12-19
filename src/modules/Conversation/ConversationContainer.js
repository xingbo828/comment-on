
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { subscribeToMessages } from './conversationAction';
import { getConversation } from './conversationReducer';
import mapImmutablePropsToPlainProps from '../Common/mapImmutablePropsToPlainProps';
import Conversation from './Conversation';


const mapStateToProps = state => ({
  conversation: getConversation(state)
});

const mapDispatchToProps = (dispatch) => ({
  subscribeToMessages: (conversationId) => dispatch(subscribeToMessages(conversationId))
});


const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const conversationId = this.props.match.params.conversationId;
      this.unsubscribe = this.props.subscribeToMessages(conversationId);
    },
    componentWillUnmount() {
      if(this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }),
  mapImmutablePropsToPlainProps
);

export default enhance(Conversation);
