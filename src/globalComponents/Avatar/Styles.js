import styled from 'styled-components';

export const AvatarContainer = styled.div`
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
  cursor: pointer;
  border-radius: 999px;
  margin: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImg = styled.img`
  width: 100%;
`;
