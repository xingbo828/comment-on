import React, { Component } from 'react';
import {
  TextField,
  TextArea,
  Button,
  ImgUpload
} from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import { StyledCol } from './Styles';

const { Container, Row, Col } = Grid;
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

    return (
      <Container>
        <Row>
          <StyledCol xs={24} sm={8} md={8} lg={8}>
            <ImgUpload.SingleImgUpload
              shape="circle"
              size={150}
              value={this.state.avatar}
              onChange={this.updateAvatar}
              name="avatar"
            />
          </StyledCol>
          <Col xs={24} sm={16} md={16} lg={16}>
            <TextField input={nameInput} name="name" label="Name" />
            <TextArea input={descInput} name="desc" label="Description" />
          </Col>
        </Row>
        <Button
          small
          danger
          style={{ float: 'right' }}
          onClick={this.removeMember}
        >
          Remove
        </Button>
        <Button
          small
          primary
          onClick={this.updateMember}
          style={{ marginRight: '20px', float: 'right' }}
        >
          Save
        </Button>
      </Container>
    );
  }
}

export default EditMember;