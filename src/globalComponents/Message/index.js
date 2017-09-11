import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';

const defaultDuration = 3;
let seed = 0;

const container = document.createElement('div');
document.body.appendChild(container);

const messages = ReactDOM.render(<Messages />, container);


const success = (content, duration = defaultDuration) => {
  return messages.addMessage({
    key: seed++,
    type: 'success',
    duration,
    content
  });
}

const info = (content, duration = defaultDuration) => {
  return messages.addMessage({
    key: seed++,
    type: 'info',
    duration,
    content
  });
}

const error = (content, duration = defaultDuration) => {
  return messages.addMessage({
    key: seed++,
    type: 'error',
    duration,
    content
  });
}

const loading = (content) => {
  return messages.addMessage({
    key: seed++,
    type: 'loading',
    duration: 0,
    content
  });
}

const remove = (key) => {
  messages.removeMessage(key);
}


export default {
  success,
  info,
  error,
  loading,
  remove
};
