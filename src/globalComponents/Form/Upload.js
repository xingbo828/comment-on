import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.span`
  display: none;
`;

class Upload extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleClick(e) {
    this.inputElement.click();
    e.preventDefault();
  }

  handleOnChange(event) {

    const file = event.target.files[0];
    console.log(file.name);
    this.props.input.onChange(file);
  }

  render() {
    const { input, label } = this.props;
    console.log(input);
    return (
      <div>
        <img src={input.value} alt="Profile Picture"/>
          { label }
        <StyledInput>
          <input type="file" onChange={this.handleOnChange} ref={(input) => { this.inputElement = input; }} />
        </StyledInput>
        <button onClick={this.handleClick}>Upload</button>
      </div>
    );
  }
};

export default Upload;
