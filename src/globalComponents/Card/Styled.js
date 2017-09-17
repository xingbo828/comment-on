import Styled from 'styled-components';

const CardDiv = Styled.div`
  z-index: 99;
  transform: translateY(${props => props.offset}px);
  box-shadow: 0 2px 15px 0px rgba(0,0,0,.07);
  border-radius: 3px;
  padding: 2rem;
  background: white;
`;

export {
  CardDiv
};