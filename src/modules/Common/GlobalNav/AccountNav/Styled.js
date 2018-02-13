import Styled from 'styled-components';

const fromTheme = props => ({ theme }) => theme.colors[props];

export const Account = Styled.div`
  cursor: pointer;
  padding: 0 1rem;

  img {
    vertical-align: middle;
  }

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0 1.5rem;
  `}
`

export const Username = Styled.span`
  padding: 0 0 0 0;
  vertical-align: middle;
  display: none;

  ${props=>props.theme.media.greaterThan('sm')`
    display: initial;
  `}
`

export const ContainerDiv = Styled.div`
  float: right;
  position: relative;
  background: white;
  transition: .3s;
  box-shadow: ${props => props.active ? '0 2px 15px 0px rgba(0,0,0,.2)' : '0 2px 15px 0px rgba(0,0,0,0)'};
  transform: ${props => props.active ? 'scale(1.01)' : 'scale(1)'};

  ${props => props.active && `
    z-index: 99;

    ::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 70px;
      height: 10px;
      left: 0;
      background: white;
      z-index: 100;
    }
  `}
`;


export const Menu = Styled.div`
  line-height: 1rem;
  box-sizing: border-box;
  z-index: 10;
  border-top: none;
  box-shadow: 0 2px 15px 0px rgba(0,0,0,.2);
`;

export const MenuList = Styled.ul`
  padding: 0;
  margin: 0;
`;

export const MenuItem = Styled.li`
  list-style-type: none;
  border-top: 1px solid ${fromTheme('border')};
  :hover {
    color: white;
    background-color: ${fromTheme('primary')};
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
