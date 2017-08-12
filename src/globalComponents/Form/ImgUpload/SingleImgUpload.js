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
    this.state = {
      imageUrl: this.props.input.value
    };
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

  handleOnChange(event) {
    const img = event.target.files[0];
    if(!img) {
      return;
    }
    this.getBase64(img, (imgData) => {
      this.setState({
        imageUrl: imgData
      });

    });
    this.props.input.onChange(event, img);
  }

  render() {
    const { input, label, actionText } = this.props;
    return (
      <StyledContainer>
        <InputLabel>{label}</InputLabel>
        <StyledSubContainer>
          <StyleImg src={this.state.imageUrl} alt={input.name} />
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
