import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Animation from '../../../globalComponents/Animation';
import DialogItemLeft from './DialogItemLeft';
import DialogItemRight from './DialogItemRight';
import { DialogContainer } from './Styled';

class Dialog extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.el.scrollIntoView({ behavior: 'smooth' });
  };

  renderMessages = msgs => {
    const { uid } = this.props.user;
    return msgs.map(msg => {
      if (msg.from.uid === uid) {
        return (
          <Animation.Fade
            timeout={300}
            key={msg.id}
          >
            {() => <DialogItemRight msg={msg} />}
          </Animation.Fade>
        );
      }
      return (
        <Animation.Fade
            timeout={300}
            key={msg.id}
          >
            {() => <DialogItemLeft msg={msg} />}
          </Animation.Fade>
      );

    });
  };

  render() {
    const { conversation: { messages } } = this.props;
    return (
      <DialogContainer>
        <TransitionGroup>{this.renderMessages(messages)}</TransitionGroup>
        <div
          ref={el => {
            this.el = el;
          }}
          style={{ clear: 'both' }}
        />
      </DialogContainer>
    );
  }
}

export default Dialog;
