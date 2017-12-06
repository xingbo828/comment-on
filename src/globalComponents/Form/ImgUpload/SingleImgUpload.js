import React, { Component } from 'react';
import {
  oneOfType,
  oneOf,
  node,
  string,
  func,
  object,
  number
} from 'prop-types';
import {
  StyledContainer,
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
      imageUrl: this.getInputValue(this.props.value),
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
    if (this.props.value !== nextProps.value && !this.state.touched) {
      this.state = {
        imageUrl: this.getInputValue(nextProps.value)
      };
    }
  }

  getInputValue(value) {
    if (value && value.constructor.name === 'File') {
      const updateImageUrlInState = imgData => {
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
    const updateImageUrlInState = imgData => {
      this.setState({
        imageUrl: imgData,
        touched: true
      });
      this.props.onChange(img);
    };
    if (!img) {
      return;
    }
    this.getBase64(img, updateImageUrlInState.bind(this));
  }

  render() {
    const { name, actionText, shape, size, className } = this.props;
    return (
      <StyledContainer className={className}>
          {this.state.imageUrl && (
            <StyleImg shape={shape} size={size}>
              <img src={this.state.imageUrl} alt={name} />
            </StyleImg>
          )}
          {this.state.imageUrl && (
            <StyleImgReplace
              shape={shape}
              size={size}
              onClick={this.handleClick}
            />
          )}
          <StyledInput>
            <input
              type="file"
              name={name}
              onChange={this.handleOnChange}
              ref={input => {
                this.inputElement = input;
              }}
            />
          </StyledInput>
          {!this.state.imageUrl && (
            <StyledUpLoadBtn
              shape={shape}
              size={size}
              onClick={this.handleClick}
            >
              {actionText}
            </StyledUpLoadBtn>
          )}
      </StyledContainer>
    );
  }
}

SingleImageUpload.propTypes = {
  value: oneOfType([object, string]),
  onChange: func.isRequired,
  name: string,
  actionText: oneOfType([node, string]),
  shape: oneOf(['circle', 'square']),
  size: number,
  style: object
};

SingleImageUpload.defaultProps = {
  actionText: 'Upload',
  onChange: () => {},
  value: '',
  name: '',
  shape: 'square',
  size: 100,
  style: {}
};

export default SingleImageUpload;
