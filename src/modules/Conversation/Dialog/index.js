import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getConversation } from '../conversationReducer';
import mapImmutablePropsToPlainProps from '../../Common/mapImmutablePropsToPlainProps';
import isLoggedIn from '../../Common/isLoggedIn';
import Dialog from './Dialog';


const mapStateToProps = state => ({
  conversation: getConversation(state)
});

const enhance = compose(
  connect(mapStateToProps),
  isLoggedIn,
  mapImmutablePropsToPlainProps
);

export default enhance(Dialog);
