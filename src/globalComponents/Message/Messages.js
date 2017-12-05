import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Message from './Message';
import { MessagesContainer } from './Styled';
import MessageTransition from './MessageTransition';

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
          messages: messages.concat(message)
        };
      }
    });
    return key;
  }

  removeMessage(messagekey) {
    this.setState(previousState => {
      return {
        messages: previousState.messages.filter(m => m.key !== messagekey)
      };
    });
  }

  renderMessages(messages) {
    return messages.map(m => {
      return (
        <MessageTransition key={m.key} unmountOnExit>
          {() => (
            <Message
              removeMessage={this.removeMessage.bind(this, m.key)}
              key={m.key}
              content={m.content}
              type={m.type}
              duration={m.duration}
              onRemove={m.onRemove}
            />
          )}
        </MessageTransition>
      );
    });
  }

  render() {
    return (
      <MessagesContainer>
        <TransitionGroup>
          {this.renderMessages(this.state.messages)}
        </TransitionGroup>
      </MessagesContainer>
    );
  }
}

export default Messages;
