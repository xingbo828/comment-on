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

  ${props=>props.theme.media.lessThan('sm')`
    ${props.active && `
      background: ${props.theme.colors.offWhite};
    `}
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
  background: white;

  ${props => props.active && `
    z-index: 99;

    ::after {
      transition: none;
      content: '';
      display: block;
      position: absolute;
      background: white;
      z-index: 100;
    }
  `}

  ${props=>props.theme.media.lessThan('sm')`
    ::after {
      transition: .3s;
      right: 0;
      top: 60px;
      height: 10px;
      width: 72px;
      background: ${props.theme.colors.offWhite};
    }
  `}

  ${props=>props.theme.media.greaterThan('sm')`
    transition: .3s;
    box-shadow: ${props => props.active ? '0 2px 15px 0px rgba(0,0,0,.2)' : '0 2px 15px 0px rgba(0,0,0,0)'};
    transform: ${props => props.active ? 'scale(1.01)' : 'scale(1)'};
    float: right;
    position: relative;

    ${props => props.active && `
      z-index: 99;

      ::after {
        top: 70px;
        height: 10px;
        left: 0;
        right: 0;
        background: white;
      }
    `}
  `}
`;


export const Menu = Styled.div`
  position: absolute;
  line-height: 1rem;
  box-sizing: border-box;
  z-index: 20;
  border-top: none;
  opacity: 0;
  top: 61px;
  transformOrigin: top right;
  user-select: none;
  background: white;

  ${props=>props.theme.media.lessThan('sm')`
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;

    ${props.active && `
      opacity: 1;
      user-select: 'auto';
      opacity: 1;
    `}
  `}
  
  ${props=>props.theme.media.greaterThan('sm')`
    width: 300px;
    top: 80px;
    right: 0;
    position: absolute;
    box-shadow: 0 2px 15px 0px rgba(0,0,0,.2);
    transition: .3s;

    ${props.active && `
      user-select: 'auto';
      opacity: 1;
    `}
  `}
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

  ${props=>props.theme.media.lessThan('sm')`
    ${props.active && `
      background: ${props.theme.colors.offWhite};
    `}
  `}
`;
