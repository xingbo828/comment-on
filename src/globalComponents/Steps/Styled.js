import styled from 'styled-components';

export const StepsContainer = styled.ul`
  display: flex;
  padding: 0;
  font-size: .875rem;
`;

export const StepTitle = styled.span`
  display: none;
  ${props=>props.theme.media.greaterThan('md')`
    display: inline;
  `}
`;

export const StepContainer = styled.li`
  position: relative;
  flex: 1;
  list-style: none;
  text-align: center;
  padding: .5rem 0;
  ${props=>props.theme.media.greaterThan('md')`
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

