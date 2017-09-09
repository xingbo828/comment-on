import styled from 'styled-components';

export const StepsContainer = styled.ul`
  display: flex;
  padding: 0;
  font-size: .7rem;
`;

export const StepContainer = styled.li`
  flex: 1;
  list-style: none;
  text-align: center;
  padding-bottom: 3px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  ${props => {
    if (props.status === 'completed') {
      return `
        cursor: pointer;
        color: ${props.theme.brandPrimary};
        border-bottom-color: ${props.theme.brandPrimary};
      `;
    } else if (props.status === 'inProgress') {
      return `
        font-weight: bold;
        color: ${props.theme.primaryActionColor};
        border-bottom-color: ${props.theme.primaryActionColor};
      `;
    } else {
      return `
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
