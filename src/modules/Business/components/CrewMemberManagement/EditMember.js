import React, { Component } from 'react';
import {
  TextField,
  TextArea,
  Button,
  ImgUpload
} from '../../../../globalComponents/Form';


class EditMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.avatar,
      name: this.props.name,
      description: this.props.description
    };
    this.updateDesc = this.updateDesc.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateMember = this.updateMember.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.removeMember = this.removeMember.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { avatar, name, description } = nextProps;
    this.setState({
      avatar,
      name,
      description
    });
  }


  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateDesc(e) {
    this.setState({
      description: e.target.value
    });
  }

  updateAvatar(e) {
    this.setState({
      avatar: e
    });
  }

  updateMember(e) {
    e.preventDefault();
    this.props.updateMember(this.state, this.props.index);
  }

  removeMember(e) {
    e.preventDefault();
    this.props.removeMember(this.props.index);
  }

  render() {
    const nameInput = {
      onChange: this.updateName,
      value: this.state.name
    };
    const descInput = {
      onChange: this.updateDesc,
      value: this.state.description
    };

    const avatarInput = {
      onChange: this.updateAvatar,
      value: this.state.avatar
    };
    return (
      <div>
        <ImgUpload.SingleImgUpload input={avatarInput} name="avatar"  />
        <TextField input={nameInput} name="name" label="Name"  />
        <TextArea input={descInput} name="desc" label="Description"  />
        <Button small primary onClick={this.updateMember}>Save</Button>
        <Button small danger onClick={this.removeMember}>Remove</Button>
      </div>
    );
  }
}



export default EditMember;
