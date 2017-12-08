import React, { Component } from 'react';
import {
  TextField,
  TextArea,
  Button,
  ImgUpload
} from '../../../../../globalComponents/Form';
import Grid from '../../../../../globalComponents/Grid';
import Icon from '../../../../../globalComponents/Icon';
import { StyledCol } from './Styles';

const { Container, Row, Col } = Grid;
class EditMember extends Component {
  constructor(props) {
    super(props);
    this.removeMember = this.removeMember.bind(this);
  }



  update = (value, field) => {
    const updatedMember = Object.assign({
      name: this.props.name,
      description: this.props.description,
      avatar: this.props.avatar
    }, { [field]: value});
    this.props.updateMember(updatedMember, this.props.index);
  }



  removeMember(e) {
    e.preventDefault();
    this.props.removeMember(this.props.index);
  }

  render() {
    const nameInput = {
      onChange: (e) => this.update(e.target.value, 'name'),
      value: this.props.name
    };
    const descInput = {
      onChange: (e) => this.update(e.target.value, 'description'),
      value: this.props.description
    };

    return (
      <Container>
        <Row>
          <StyledCol xs={24} sm={8} md={8} lg={8}>
            <ImgUpload.SingleImgUpload
              shape="circle"
              size={150}
              value={this.props.avatar}
              onChange={(e) => this.update(e, 'avatar')}
              name="avatar"
              actionText={<Icon icon="upload" size="lg" />}
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
      </Container>
    );
  }
}

export default EditMember;
