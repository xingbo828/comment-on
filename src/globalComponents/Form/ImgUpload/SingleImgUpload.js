import React, { Component } from 'react';
import {
  StyledContainer,
  StyledSubContainer,
  InputLabel,
  StyleImg,
  StyleImgReplace,
  StyledInput,
  StyledUpLoadBtn
} from './Styled';

class SingleImageUpload extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getInputValue = this.getInputValue.bind(this);

    this.state = {
      imageUrl: this.getInputValue(this.props.input.value),
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
        imageUrl: this.getInputValue(nextProps.input.value)
      };
    }
  }

  getInputValue(value) {
    if(value && value.constructor.name === 'File') {
      const updateImageUrlInState = (imgData) => {
        this.setState({
          imageUrl: imgData
        });
      };
      this.getBase64(value, updateImageUrlInState.bind(this));
      return null;
    }
    return value;
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
          {this.state.imageUrl && <StyleImgReplace onClick={this.handleClick} />}
          <StyledInput>
            <input type="file" name={input.name} onChange={this.handleOnChange} ref={(input) => { this.inputElement = input; }} />
          </StyledInput>
          {!this.state.imageUrl && <StyledUpLoadBtn onClick={this.handleClick}>{actionText}</StyledUpLoadBtn>}
        </StyledSubContainer>
      </StyledContainer>
    );
  }
};

export default SingleImageUpload;
