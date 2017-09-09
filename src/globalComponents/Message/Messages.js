import React, { Component } from 'react';
import Icon from '../Icon';
import Message from './Message';
import { MessagesContainer } from './Styled';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }

  addMessage(message) {
    const key = message.key;
    this.setState(previousState => {
      const messages = previousState.messages;
      if (!messages.filter(v => v.key === key).length) {
        return {
          messages: messages.concat(message),
        };
      }
    });
  }

  removeMessage(messagekey) {
    this.setState(previousState => {
      return {
        messages:  previousState.messages.filter( m=> m.key !== messagekey)
      }
    });
  }

  renderMessages(messages) {
    return messages.map(m => {
      return <Message removeMessage={this.removeMessage.bind(this, m.key)} key={m.key} content={m.content} type={m.type} duration={m.duration} />;
    });
  }

  render() {
    return (
      <MessagesContainer>
        {this.renderMessages(this.state.messages)}
      </MessagesContainer>
    );
  }
}

export default Messages;


