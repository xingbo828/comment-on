import React, { Component } from 'react';
import DialogItemLeft from './DialogItemLeft';
import DialogItemRight from './DialogItemRight';
import {
  DialogContainer,
} from './Styled';

class Dialog extends Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  renderMessages = (msgs) => {
    const { uid } = this.props.user;
    return msgs.map(msg => {
      if( msg.from.uid === uid ) {
        return <DialogItemRight key={msg.id} msg={msg}/>;
      }
      return <DialogItemLeft key={msg.id} msg={msg}/>;
    });
  };

  render() {
    const { conversation: { messages } } = this.props;
    return (
      <DialogContainer>
        {this.renderMessages(messages)}
        <div ref={el => { this.el = el; }} style={{ clear: 'both'}} />
      </DialogContainer>
    );
  }
}

export default Dialog;
