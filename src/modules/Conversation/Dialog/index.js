// import { connect } from 'react-redux';
// import { compose } from 'recompose';

// import { getConversation } from '../conversationReducer';
// import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
// import isLoggedIn from '../../Common/isLoggedIn';
import Dialog from './Dialog';


// const mapStateToProps = (state, ownProps) => ({
//   conversation: getConversation(state, ownProps.match.params.conversationId)
// });

// const enhance = compose(
//   connect(mapStateToProps),
//   isLoggedIn,
//   mapImmutablePropsToPlainProps
// );

export default Dialog;
