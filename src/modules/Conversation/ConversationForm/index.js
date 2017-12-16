import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';

import { sendMessage } from '../conversationAction';
import ConversationForm from './ConversationForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (conversationId, message) => dispatch(sendMessage(conversationId, message)),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'conversation.dialog',
    onSubmit: (values, dispatch, props) => {
      props.sendMessage(props.conversationId, {
        type: 'Text',
        text: values.get('message')
      });
    },
    onSubmitSuccess: (result, dispatch, props) => {
      props.reset()
    },
    onSubmitFail: (errors, dispatch, submitError) => {
    }
  })
);

export default enhance(ConversationForm);
