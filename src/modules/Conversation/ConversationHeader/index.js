
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { closeConversation } from '../conversationAction';
import ConversationHeader from './ConversationHeader';



const mapDispatchToProps = (dispatch, ownProps) => ({
  closeConversation: () => dispatch(closeConversation()),
});


const enhance = compose(
  connect(null, mapDispatchToProps)
);

export default enhance(ConversationHeader);
