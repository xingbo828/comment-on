import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../globalComponents/Avatar';
import Icon from '../../../../globalComponents/Icon';
import {
  ContainerDiv,
  Menu,
  MenuList,
  MenuItem,
  DisplayName,
  Account,
  Username
} from './Styled';
import DropDownTransition from './DropDownTransition';

class AccountNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.formatUserName = this.formatUserName.bind(this)
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

  handleLogout(e) {
    e.preventDefault();
    this.props.logout(e);
  }

  formatUserName(_name){
    const nameList = _name.split(' ')
    nameList[nameList.length - 1] = `${nameList[nameList.length - 1].charAt(0)}.`
    return nameList.join(' ')
  }

  render() {
    const { user, loginStatus } = this.props;
    const active = this.state.active;
    if (loginStatus === 'NOT_AUTHENTICATED') {
      return <Link to="/login">Sign up / Login</Link>;
    }

    return (
      <ContainerDiv
        active={active}
        innerRef={(el) => { this.containerRef = el; }}
      >
        <Account role="button" onClick={this.handleClick} >
          <Username>{this.formatUserName(user.displayName)}&nbsp;&nbsp;<Icon icon="chevron-down" />&nbsp;&nbsp;</Username>
          <Avatar src={user.photoURL} />
        </Account>
        { active && <DropDownTransition in={active}>
          {() =>
            <Menu active={active}>
              <DisplayName>{user.displayName}</DisplayName>
              <MenuList onClick={this.handleClick}>
                <MenuItem><Link to="/account">Manage my account</Link></MenuItem>
                {user.moverId && <MenuItem><Link to={`/mover/edit/basic-profile`}>Manage my mover account</Link></MenuItem>}
                <MenuItem><a href="" onClick={this.handleLogout}>Logout</a></MenuItem>
              </MenuList>
          </Menu>
        }
        </DropDownTransition> }
      </ContainerDiv>
    );
  }
}

export default AccountNav;
