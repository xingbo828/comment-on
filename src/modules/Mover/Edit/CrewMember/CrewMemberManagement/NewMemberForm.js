import React, { Component } from 'react';
import {
  TextField,
  TextArea,
  Button,
  ImgUpload
} from '../../../../../globalComponents/Form';
import Icon from '../../../../../globalComponents/Icon';
import Grid from '../../../../../globalComponents/Grid';
import { StyledCol } from './Styles';

const { Container, Row, Col } = Grid;
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

    return (
      <Container>
      <Row>
      <StyledCol xs={24} sm={8} md={8} lg={8}>
        <ImgUpload.SingleImgUpload
          shape="circle"
          size={150}
          value={null}
          onChange={this.updateAvatar}
          name="avatar"
          actionText={<Icon icon="upload" size="lg" />}
        />
        </StyledCol>
        <Col xs={24} sm={16} md={16} lg={16}>
        <TextField input={nameInput} name="name" label="Name" />
        <TextArea input={descInput} name="desc" label="Description" />
        </Col>
        </Row>
        <Button style={{float: 'right'}} small primary onClick={this.addNewMember}>
          Create
        </Button>
      </Container>
    );
  }
}

export default NewMemberForm;
