import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Animation from '../../../globalComponents/Animation';
import DialogItemLeft from './DialogItemLeft';
import DialogItemRight from './DialogItemRight';
import { DialogContainer, ContainerWrapper } from './Styled';

class Dialog extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.wrapper.scroll(0, this.el.offsetTop);
  };

  renderMessages = msgs => {
    const { uid } = this.props.user;
    return msgs.map(msg => (
      <Animation.Fade component="li" timeout={350} key={msg.id}>
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
      <ContainerWrapper>
        <DialogContainer
          innerRef={el => {
            this.wrapper = el;
          }}
        >
          <TransitionGroup>{this.renderMessages(messages)}</TransitionGroup>
          <div
            ref={el => {
              this.el = el;
            }}
            style={{ clear: 'both' }}
          />
        </DialogContainer>
      </ContainerWrapper>
    );
  }
}

export default Dialog;
