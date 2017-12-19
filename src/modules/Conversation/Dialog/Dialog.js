import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Animation from '../../../globalComponents/Animation';
import DialogItemLeft from './DialogItemLeft';
import DialogItemRight from './DialogItemRight';
import { DialogContainer } from './Styled';

class Dialog extends Component {
  componentDidMount() {
    console.log(2);
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
    return msgs.map(msg => (
      <Animation.Fade timeout={300} key={msg.id}>
        {() =>
          msg.from.uid === uid ? (
            <DialogItemRight msg={msg} />
          ) : (
            <DialogItemLeft msg={msg} />
          )
        }
      </Animation.Fade>
    ));
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
          style={{ height: 100, clear: 'both' }}
        />
      </DialogContainer>
    );
  }
}

export default Dialog;
