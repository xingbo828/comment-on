import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const fromTheme = props => ({ theme }) => theme[props];

const ContainerDiv = Styled.div`
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

const ProfilePic = Styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background: gray;
  border-radius: 999px;
  margin: 10px;
`;

const Menu = Styled.div`
  line-height: 1rem;
  box-sizing: border-box;
  position: absolute;
  width: 300px;
  right: -1px;
  top: 60px;
  background: white;
  z-index: 10;
  border: 1px solid ${fromTheme('primaryColor')};
  border-top: none;
  display: ${props => props.active ? 'block' : 'none'}
`;

const MenuList = Styled.ul`
  padding: 0;
  margin: 0;
`;

const MenuItem = Styled.li`
  list-style-type: none;
  border-top: 1px solid ${fromTheme('borderPrimary')};

  a {
    text-decoration: none;
    color: inherit;
    padding: 1rem;
    display: block;
  }
`;

const DisplayName = Styled.span`
  font-size: 1rem;
  margin: 1rem;
  display: block;
  font-weight: bold;
`;

class AccountNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.containerRef && !this.containerRef.contains(e.target)) {
      this.setState({ active: false });
    }
  }

  handleClick(event) {
    this.setState({ active: !this.state.active });
  }
  
  render() {
    const { user, isLoggedIn, logout } = this.props;
    const active = this.state.active;

    if (!isLoggedIn) {
      return (null);
    }
    
    return (
      <ContainerDiv 
        active={active}
        innerRef={(el) => { this.containerRef = el; }}
      >
        <ProfilePic 
          onClick={this.handleClick}
        />
        <Menu active={active}>
          <DisplayName>{user.displayName}</DisplayName>
          <MenuList onClick={this.handleClick}>
            <MenuItem><Link to="/account">Settings</Link></MenuItem>
            <MenuItem><a href="" onClick={logout}>Logout</a></MenuItem>
          </MenuList>
        </Menu>
      </ContainerDiv>
    );
  }
}

export default AccountNav;