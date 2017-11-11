import styled from 'styled-components';

export const StepsContainer = styled.ul`
  display: flex;
  padding: 0;
  font-size: .75rem;
`;

export const StepContainer = styled.li`
  position: relative;
  flex: 1;
  list-style: none;
  text-align: center;
  padding: ${props=>props.theme.spaces.base} 0;
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
        border-bottom-color: transparent;
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
  padding-right: ${props=>props.theme.spaces.xTight};

`;

export const StepHighLightBar = styled.span`
  transition: .3s;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: ${props=>props.theme.colors.primary};
  bottom: -1px;
  left: 0;
  transform-origin: 0 0;
  transform: ${props=>props.status === 'inProgress' ? 'scale(1)' : 'scale(0)'};
`;

