import styled, { keyframes } from 'styled-components';

const tailEffect = keyframes`
  to {
    box-shadow: 0 0 3px 3px transparent;
  }
`;


export const StepsContainer = styled.ul`
  display: flex;
  padding: 0;
  font-size: .7rem;
  ${props=>props.theme.media.greaterThan('sm')`
    font-size: .875rem;
  `}
`;

export const StepDot = styled.span`
  display: none;
  ${props=>props.theme.media.greaterThan('sm')`
    display: inline;
    padding-right: 5px;
    ${props => {
      if(!props.completed){
        return `
          &:after{
            content: '. '
          }
        `;
      }
    }}
  `}
`;

export const StepContainer = styled.li`
  position: relative;
  flex: 1;
  list-style: none;
  text-align: center;
  padding: .5rem 0;
  ${props=>props.theme.media.greaterThan('sm')`
    padding: 2.5rem 0;
    border-top: 1px solid ${props=>props.theme.colors.border};
  `}
  border-bottom-width: 1px;
  border-bottom-style: solid;
  text-transform: uppercase;
  font-weight: ${props=>props.theme.fontWeights.medium};
  ${props => {
    if (props.status === 'completed') {
      return `
        cursor: pointer;
        border-bottom-color: ${props.theme.colors.success};
        i {
          color: ${props.theme.colors.success};
        }
      `;
    } else if (props.status === 'inProgress') {
      return `
        border-bottom-color: ${props.theme.colors.border};
      `;
    } else {
      return `
        color: ${props.theme.colors.textLight};
        border-bottom-color: ${props.theme.colors.border};
      `;
    }
  }}
`;


export const StepLabel = styled.span`

`;

export const StepSeperatorWrapper = styled.span`
  display: none;
  ${props=>props.theme.media.greaterThan('sm')`
    display: inline;
  `}
`;

export const StepHighLightBar = styled.span`
  transition: transform .7s;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: ${props=>props.theme.colors.primary};
  box-shadow: 0 0 0 0 ${props=>props.theme.colors.primary};
  bottom: -1px;
  left: 0;
  transform-origin: 0 0;
  transform: ${props=>props.status === 'inProgress' ? 'scale(1)' : 'scale(0)'};
  animation: ${props=>props.status === 'inProgress' ? tailEffect : 'none'} .7s;
`;


