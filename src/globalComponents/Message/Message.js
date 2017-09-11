import React, { Component } from 'react';
import {
  MessageContainer,
  MessageContent,
  SuccessMessageContent,
  InfoMessageContent,
  ErrorMessageContent,
  LoadingMessageContent
} from './Styled';

class Message extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    if(this.props.duration > 0) {
      this.removeRef = setTimeout(()=>{
        this.remove();
      }, this.props.duration * 1000);
    }
  }

  componentWillUnmount() {
    if (this.removeRef) {
      clearTimeout(this.removeRef);
      this.removeRef = null;
    }
  }

  remove() {
    if(this.removeRef) {
      clearTimeout(this.removeRef);
    }
    this.props.removeMessage();
  }

  getContainerType(type) {
    if (type === 'success') {
      return SuccessMessageContent;
    } else if (type === 'info') {
      return InfoMessageContent;
    } else if (type === 'error') {
      return ErrorMessageContent;
    } else if (type === 'loading') {
      return LoadingMessageContent;
    } else {
      throw new Error('Unknown message type');
    }
  }

  render() {
    const { content, type } = this.props;
    const ContentContainer = this.getContainerType(type);
    return (
      <MessageContainer onClick={this.remove}>
        <MessageContent>
          <ContentContainer />
          { content }
        </MessageContent>
      </MessageContainer>
    );
  }
}


export default Message;
