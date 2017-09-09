import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';

let instance;
const defaultDuration = 300;
let seed = 0;

const container = document.createElement('div');
document.body.appendChild(container);

const messages = ReactDOM.render(<Messages />, container);


const success = (content, duration = defaultDuration) => {
  messages.addMessage({
    key: seed++,
    type: 'success',
    duration,
    content
  });
}

const info = (content, duration = defaultDuration) => {
  messages.addMessage({
    key: seed++,
    type: 'info',
    duration,
    content
  });
}

const error = (content, duration = defaultDuration) => {
  messages.addMessage({
    key: seed++,
    type: 'error',
    duration,
    content
  });
}


export default {
  success,
  info,
  error
};
