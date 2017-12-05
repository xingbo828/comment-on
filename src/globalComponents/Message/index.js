import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';

const defaultDuration = 3;
let seed = 0;

const container = document.createElement('div');
document.body.appendChild(container);

const messages = ReactDOM.render(<Messages />, container);


const success = (content, duration = defaultDuration, onRemove) => {
  return messages.addMessage({
    key: seed++,
    type: 'success',
    duration,
    content,
    onRemove
  });
}

const info = (content, duration = defaultDuration, onRemove) => {
  return messages.addMessage({
    key: seed++,
    type: 'info',
    duration,
    content,
    onRemove
  });
}

const error = (content, duration = defaultDuration, onRemove) => {
  return messages.addMessage({
    key: seed++,
    type: 'error',
    duration,
    content,
    onRemove
  });
}

const loading = (content, onRemove) => {
  return messages.addMessage({
    key: seed++,
    type: 'loading',
    duration: 0,
    content,
    onRemove
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
