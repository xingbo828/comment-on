import styled from 'styled-components';

export const AvatarContainer = styled.div`
  ${props=> {
    if(props.size === 'sm'){
      return `
        height: 20px;
        width: 20px;
        line-height: 20px;
      `;
    } else if (props.size === 'lg') {
      return `
        line-height: 70px;
        height: 60px;
        width: 60px;
      `;
    } else {
      return `
        height: 40px;
        width: 40px;
        line-height: 40px;
      `;
    }
  }}
  cursor: pointer;
  border-radius: 100%;
  overflow: hidden;
  text-align: center;
  display: inline-block;
`;

export const AvatarImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
