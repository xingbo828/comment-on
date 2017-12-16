import styled from 'styled-components';

export const ConversationHeaderContainer = styled.div`
  height: 50px;
  display: flex;
  padding: 0 ${props=>props.theme.spaces.base};
  align-items: center;
`;


export const ConversationHeaderCloseBtn = styled.button`
  background-image: none;
  border: 1px solid ${props=>props.theme.colors.border};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: ${props=>props.theme.colors.secondary};
    color: white;
  }
`;
