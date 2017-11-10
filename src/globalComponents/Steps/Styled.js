import styled from 'styled-components';

export const StepsContainer = styled.ul`
  display: flex;
  padding: 0;
  font-size: .8rem;
`;

export const StepContainer = styled.li`
  flex: 1;
  list-style: none;
  text-align: center;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  text-transform: uppercase;
  font-weight: ${props=> props.theme.fontWeights.medium};
  ${props => {
    if (props.status === 'completed') {
      return `
        cursor: pointer;
        color: ${props.theme.colors.primary};
        border-bottom-color: ${props.theme.colors.primary};
      `;
    } else if (props.status === 'inProgress') {
      return `
        color: ${props.theme.colors.secondary};
        border-bottom-color: ${props.theme.colors.secondary};
      `;
    } else {
      return `
        color: ${props.theme.colors.textLight};
        border-bottom-color: ${props.theme.colors.border};
      `;
    }
  }}
`;


export const StepWithIconWrapper = styled.span`

`;

export const StepIconWrapper = styled.span`
  padding: 0 5px;
`;
