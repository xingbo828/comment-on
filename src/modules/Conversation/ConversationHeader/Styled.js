import styled from 'styled-components';

export const ConversationHeaderContainer = styled.div`
  padding: 0 ${props=>props.theme.spaces.base};
  min-height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 3px 1px #f8f8f8;
`;

export const GoBackBtn = styled.button`
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
`;

export const HeaderTitleWrapper = styled.span`
  flex-grow: 1;
  text-align: center;

`;
export const HeaderTitle = styled.h2`
  margin: 0;
`;
