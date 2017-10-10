import Styled from 'styled-components';

const fromTheme = props => ({ theme }) => theme[props];

export const ContainerDiv = Styled.div`
  height: 60px;
  width: 60px;
  float: right;
  position: relative;
  background: ${props => props.active ? 'white' : 'none'};

    ::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 60px;
      height: 1px;
      left: 0;
      background: white;
      z-index: 11;
    }
`;


export const Menu = Styled.div`
  line-height: 1rem;
  box-sizing: border-box;
  z-index: 10;
  border: 1px solid ${fromTheme('primary')};
  border-top: none;
`;

export const MenuList = Styled.ul`
  padding: 0;
  margin: 0;
`;

export const MenuItem = Styled.li`
  list-style-type: none;
  border-top: 1px solid ${fromTheme('borderPrimary')};
  :hover {
    color: white;
    background-color: ${fromTheme('primaryAction')};
  }
  a {
    text-decoration: none;
    color: inherit;
    padding: 1rem;
    display: block;
  }
`;

export const DisplayName = Styled.span`
  font-size: 1rem;
  padding: 1rem;
  display: block;
  font-weight: bold;

`;
