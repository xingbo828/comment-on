import styled from 'styled-components';

export const DialogContainer = styled.ul`
  padding: 0;
  margin: 0;
  height: calc(100% - 70px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const DialogItemContainer = styled.li`
  list-style: none;
  display: flex;
  padding: ${props=>props.theme.spaces.base};
  align-items: center;
`;

export const DialogItemRightContainer = DialogItemContainer.extend`
  flex-direction: row-reverse;
`;

export const DislogItemContent = styled.span`
  background-color: ${props=>props.theme.colors.secondary};
  padding: ${props=>props.theme.spaces.tight} ${props=>props.theme.spaces.base};
  color: white;
  border-radius: 5px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.313em solid transparent;
    border-right-color: ${props=>props.theme.colors.secondary};;
    border-left: 0;
    border-top: 0;
    margin-top: -0.156em;
    margin-left: -0.312em;
  }



`;

export const DislogItemRightContent = DislogItemContent.extend`
  background-color: ${props=>props.theme.colors.primary};
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.313em solid transparent;
    border-left-color: ${props=>props.theme.colors.primary};
    border-right: 0;
    border-top: 0;
    margin-left: auto;
    left: auto;
    margin-top: -0.156em;
    margin-right: -0.312em;
  }
 `;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${props=>props.theme.spaces.tight};
  max-width: 80vw;
`;


export const SenderName = styled.span`
  display: inline-block;
  font-size: .875rem;
  padding-bottom: ${props=>props.theme.spaces.xTight};
`;

export const MsgTime = styled.span`
  display: inline-block;
  font-size: .825rem;
  padding: ${props=>props.theme.spaces.xTight} 0;
  color: ${props=>props.theme.colors.textLight};
`;
