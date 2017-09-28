import styled from 'styled-components';

export const StepsContainer = styled.ul`
  display: flex;
  padding: 0;
  font-size: .75rem;
`;

export const StepContainer = styled.li`
  flex: 1;
  list-style: none;
  text-align: center;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  text-transform: uppercase;
  ${props => {
    if (props.status === 'completed') {
      return `
        cursor: pointer;
        color: ${props.theme.primaryActionColor};
        border-bottom-color: ${props.theme.primaryActionColor};
      `;
    } else if (props.status === 'inProgress') {
      return `
        color: ${props.theme.secondaryActionColor};
        border-bottom-color: ${props.theme.secondaryActionColor};
      `;
    } else {
      return `
        color: ${props.theme.textLight};
        border-bottom-color: ${props.theme.borderPrimary};
      `;
    }
  }}
`;


export const StepWithIconWrapper = styled.span`

`;

export const StepIconWrapper = styled.span`
  padding: 0 5px;
`;
