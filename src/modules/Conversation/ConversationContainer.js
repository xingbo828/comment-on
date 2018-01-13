
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { withRouter } from 'react-router-dom';
import isUndefined from 'lodash/isUndefined';
import { subscribeToMessages, clearConversationMessages } from './conversationAction';
import { getConversation } from './conversationReducer';
import mapImmutablePropsToPlainProps from '../Common/mapImmutablePropsToPlainProps';
import isLoggedIn from '../Common/isLoggedIn'
import Conversation from './Conversation';


const mapStateToProps = (state, ownProps) => ({
  conversation: getConversation(state, ownProps.match.params.conversationId)
});

const mapDispatchToProps = (dispatch) => ({
  subscribeToMessages: (conversationId) => dispatch(subscribeToMessages(conversationId)),
  clearConversationMessages: (conversationId) => dispatch(clearConversationMessages(conversationId))
});

const isNotInited = (props) => isUndefined(props.conversation);

const enhance = compose(
  withRouter,
  isLoggedIn,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    async componentDidMount() {
      const conversationId = this.props.match.params.conversationId;
      this.unsubscribe = await this.props.subscribeToMessages(conversationId);
    },
    componentWillUnmount() {
      const conversationId = this.props.match.params.conversationId;
      this.props.clearConversationMessages(conversationId);
      if(this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }),
  branch(isNotInited, renderNothing),
  mapImmutablePropsToPlainProps
);

export default enhance(Conversation);
