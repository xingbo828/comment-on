import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  border-radius: 100%;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
