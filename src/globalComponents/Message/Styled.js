import styled, { keyframes } from 'styled-components';

import {
  primaryActionColor,
  secondaryActionColor,
  dangerActionColor
} from '../../foundation/Variables';

const MessageIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MessagesContainer = styled.ul`
  position: fixed;
  top: 15px;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 9999;
  padding: 0;
`;

export const MessageContainer = styled.li`
  list-style: none;
  padding: 8px;
  text-align: center;
  &:first-child {
    margin-top: -8px;
  }
  overflow: hidden;
`;

const MessageContent = styled.div`
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  display: inline-block;
  pointer-events: all;
  font-size: 0.85rem;
  animation: ${MessageIn} .3s linear;

  ::before {
    font-family: 'FontAwesome';
    padding-right: 8px;
  }
`

export const SuccessMessageContent = MessageContent.extend`
  ::before {
    color: ${ primaryActionColor };
    content: '\f058';
  }
`;

export const ErrorMessageContent = MessageContent.extend`
  ::before {
    color: ${ dangerActionColor };
    content: '\f06a';
  }
`;

export const InfoMessageContent = MessageContent.extend`
  ::before {
    color: ${ secondaryActionColor };
    content: '\f05a';
  }
`;



