import styled from 'styled-components';

export const AvatarImg = styled.img`
  border-radius: 50%;
  cursor: pointer;
  ${props=> {
    if(props.size === 'sm'){
      return `
        height: 20px;
        width: 20px;
      `;
    } else if (props.size === 'lg') {
      return `
        height: 60px;
        width: 60px;
      `;
    } else {
      return `
        height: 40px;
        width: 40px;
      `;
    }
  }}
`;
