import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../globalComponents/Avatar';
import {
  ContainerDiv,
  Menu,
  MenuList,
  MenuItem,
  DisplayName
} from './Styled';
import DropDownTransition from './DropDownTransition';
import Badge from '../../../globalComponents/Badge';

class AccountNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  render() {
    const { user, loginStatus } = this.props;
    const active = this.state.active;
    const myBusiness = user.businesses ? Object.keys(user.businesses)[0] : null;
    if (loginStatus === 'NOT_AUTHENTICATED') {
      return <Link to="/login">Sign up / Login</Link>;
    }

    return (
      <ContainerDiv
        active={active}
        innerRef={(el) => { this.containerRef = el; }}
      >
        <Badge count={99}>
          <Avatar src={user.photoURL} onClick={this.handleClick} />
        </Badge>
        <DropDownTransition in={active}>
          {() =>
            <Menu active={active}>
              <DisplayName>{user.displayName}</DisplayName>
              <MenuList onClick={this.handleClick}>
                <MenuItem><Link to="/account">Settings</Link></MenuItem>
                {myBusiness && <MenuItem><Link to={`/business/profile/${myBusiness}`}>Company profile</Link></MenuItem>}
                <MenuItem><a href="" onClick={this.handleLogout}>Logout</a></MenuItem>
              </MenuList>
          </Menu>
        }
        </DropDownTransition>
      </ContainerDiv>
    );
  }
}

export default AccountNav;
