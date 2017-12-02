import React, { Component } from 'react';
import {
  TextField,
  TextArea,
  Button,
  ImgUpload
} from '../../../../../globalComponents/Form';


class NewMemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      description: ''
    };
    this.updateDesc = this.updateDesc.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addNewMember = this.addNewMember.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
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

  addNewMember(e) {
    e.preventDefault();
    this.props.addNewMember(this.state);
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
      value: null
    };
    return (
      <div>
        <ImgUpload.SingleImgUpload input={avatarInput} name="avatar" label="Avatar" actionText="Upload"/>
        <TextField input={nameInput} name="name" label="Name"  />
        <TextArea input={descInput} name="desc" label="Description"  />
        <Button small primary onClick={this.addNewMember}>Create</Button>
      </div>
    );
  }
}



export default NewMemberForm;
