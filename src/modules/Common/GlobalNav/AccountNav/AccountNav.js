import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../globalComponents/Avatar';
import Icon from '../../../../globalComponents/Icon';
import { connect } from 'react-redux'
import { toggleMenu } from '../GlobalNavActions'
import {
  ContainerDiv,
  Menu,
  MenuList,
  MenuItem,
  DisplayName,
  Account,
  Username
} from './Styled';

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
      this.props.toggleMenuActiveState(false)
    }
  }

  handleClick(event) {
    const active = !this.state.active;
    this.props.toggleMenuActiveState(active)
    this.setState({ active });
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
        <Account role="button" active={active} onClick={this.handleClick} >
          <Username>{this.formatUserName(user.displayName)}&nbsp;&nbsp;<Icon icon="chevron-down" />&nbsp;&nbsp;</Username>
          <Avatar src={user.photoURL} />
        </Account>
        { active &&
          <Menu active={active}>
            <DisplayName active={active}>{user.displayName}</DisplayName>
            <MenuList onClick={this.handleClick}>
              <MenuItem><Link to="/account">Manage my account</Link></MenuItem>
              {user.moverId && <MenuItem><Link to={`/mover/edit/basic-profile`}>Manage my mover account</Link></MenuItem>}
              <MenuItem><a href="" onClick={this.handleLogout}>Logout</a></MenuItem>
            </MenuList>
          </Menu>
        }
      </ContainerDiv>
    );
  }
}

// const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch) => ({
  toggleMenuActiveState: (isActive) => {
    dispatch(toggleMenu(isActive))
  }
})

export default connect(null, mapDispatchToProps)(AccountNav);
