import styled, { keyframes } from 'styled-components';

import {
  primaryActionColor,
  secondaryActionColor,
  dangerActionColor
} from '../../foundation/Variables';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
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

export const MessageContent = styled.div`
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  display: inline-block;
  pointer-events: all;
  font-size: 0.85rem;
`

const MessageContentIcon = styled.span`
  margin-right: 8px;
  display: inline-block;
  ::before {
    font-family: 'FontAwesome';
  }
`;

export const SuccessMessageContent = MessageContentIcon.extend`
  ::before {
    color: ${ primaryActionColor };
    content: '\f058';
  }
`;

export const ErrorMessageContent = MessageContentIcon.extend`
  ::before {
    color: ${ dangerActionColor };
    content: '\f06a';
  }
`;

export const InfoMessageContent = MessageContentIcon.extend`
  ::before {
    color: ${ secondaryActionColor };
    content: '\f05a';
  }
`;

export const LoadingMessageContent = MessageContentIcon.extend`
  animation: ${spin} 2s linear infinite;
  ::before {
    content: '\f021';
  }
`;


