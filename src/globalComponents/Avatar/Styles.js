import styled from 'styled-components';

export const AvatarImg = styled.div`
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-image: url(${props=>props.src});
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
