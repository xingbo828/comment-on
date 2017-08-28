import React, { Component } from 'react';
import {
  StyledContainer,
  StyledSubContainer,
  InputLabel,
  StyleImg,
  StyledInput,
  StyledUpLoadBtn
} from './Styled';

class SingleImageUpload extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    console.log(this.props.input.value);
    this.state = {
      imageUrl: this.props.input.value,
      touched: false
    };
    this.getBase64 = this.getBase64.bind(this);
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleClick(e) {
    this.inputElement.click();
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.input.value !== nextProps.input.value && !this.state.touched) {
      this.state = {
        imageUrl: nextProps.input.value
      };
    }
  }

  handleOnChange(event) {
    const img = event.target.files[0];
    const updateImageUrlInState = (imgData) => {
      this.setState({
        imageUrl: imgData,
        touched: true
      });
      this.props.input.onChange(img);
    };
    if(!img) {
      return;
    }
    this.getBase64(img, updateImageUrlInState.bind(this));
  }

  render() {
    const { input, label, actionText } = this.props;
    return (
      <StyledContainer>
        <InputLabel>{label}</InputLabel>
        <StyledSubContainer>
          {this.state.imageUrl && <StyleImg src={this.state.imageUrl} alt={input.name} />}
          <StyledInput>
            <input type="file" name={input.name} onChange={this.handleOnChange} ref={(input) => { this.inputElement = input; }} />
          </StyledInput>
          <StyledUpLoadBtn onClick={this.handleClick}>{actionText}</StyledUpLoadBtn>
        </StyledSubContainer>
      </StyledContainer>
    );
  }
};

export default SingleImageUpload;
