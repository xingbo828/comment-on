import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  border: solid ${props => props.theme.borderPrimary};
  border-width: 0 0 1px 0;
  margin: 0 0 1rem;
  padding: 0.5rem 0;
`;
const StyledInput = styled.span`
  display: none;
`;

const StyleImg = styled.img`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;
`;

const StyledUpLoadBtn = styled.button`
  width: 100px;
  height: 100px;
  margin-left: 1rem;
  background-color: ${props => props.theme.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: ${props => props.theme.borderPrimary};
    border: 1px dashed ${props => props.theme.textDark};
  }
  :focus {
    outline: 0;
  }
`;

class ImgUpload extends Component {
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
    this.getBase64(img, (imgData) => {
      this.setState({
        imageUrl: imgData
      });

    });
    this.props.input.onChange(event, img);
  }

  render() {
    const { input, label } = this.props;
    return (
      <StyledContainer>
        <StyleImg src={this.state.imageUrl} alt={input.name}/>
        <StyledInput>
          <input type="file" name={input.name} onChange={this.handleOnChange} ref={(input) => { this.inputElement = input; }} />
        </StyledInput>
        <StyledUpLoadBtn onClick={this.handleClick}>{label}</StyledUpLoadBtn>
      </StyledContainer>
    );
  }
};

export default ImgUpload;
