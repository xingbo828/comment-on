import styled from 'styled-components';

export const RateIconList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

const renderIcon = (props) => {
  if(props.full) {
    return `
      i {
        color: #f5a623;
      }
    `;
  } else if (props.empty) {
    return `
      i {
        color: ${props.theme.colors.textLight};
      }
    `;
  }
  return `
    i {
      color: ${props.theme.colors.textLight};
    }
    i:first-child {
      line-height: 19px;
      position: absolute;
      width: ${props.percent}%;
      color: #f5a623;
      overflow: hidden;
    }
  `;
};


export const RateIcon = styled.li`
  list-style: none;
  margin-right: 8px;
  position: relative;
  ${renderIcon}
  ${props => {
    if(!props.readOnly) {
      return `
        cursor: pointer;
        transition: transform .3s cubic-bezier(0.720, -0.600, 0.370, 1.650);
        :hover {
          transform: scale(1.3, 1.3);
        }
      `;
    }
  }}

`;
