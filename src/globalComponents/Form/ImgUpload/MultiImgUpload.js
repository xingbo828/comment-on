import React, { Component } from 'react';
import {
  StyledContainer,
  StyledSubContainer,
  StyledImgRemove,
  StyledImgList,
  StyledImgListItem,
  StyleImg,
  StyledInput,
  StyledUpLoadBtn,
  InputLabel
} from './Styled';

class MultiImgUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.renderActionBtn = this.renderActionBtn.bind(this);
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

  handleAdd(event) {
    const img = event.target.files[0];
    if(!img) {
      return;
    }
    let currentImages = this.state.images;
    this.getBase64(img, (imgData) => {
      currentImages = currentImages.concat([{
        imageUrl: imgData
      }]);
      this.setState({
        images: currentImages
      });
      this.props.input.onChange(event, currentImages);
    });

  }

  handleRemove(event, index) {
    const currentImages = this.state.images.filter((img, key) => key !== index);
    this.setState({
      images: currentImages
    });
    this.props.input.onChange(event, currentImages);
  }

  renderImges(imgs) {
    return imgs.map((img, index) => {
      return (
        <StyledImgListItem key={index}>
          <StyledImgRemove onClick={(e)=>{this.handleRemove(e, index)}} />
          <StyleImg src={img.imageUrl} />
        </StyledImgListItem>
      );
    });
  }

  renderActionBtn(limit, actionText) {
    if ( limit!==0 && this.state.images.length >= limit){
      return null;
    }
    return <StyledUpLoadBtn onClick={this.handleClick}>{actionText}</StyledUpLoadBtn>;
  }

  render() {
    const { input, label, actionText, limit } = this.props;
    return (
      <StyledContainer>
        <InputLabel>{label}</InputLabel>
        <StyledSubContainer>
          <StyledImgList>
            {this.renderImges(this.state.images)}
          </StyledImgList>
          <StyledInput>
            <input type="file" name={input.name} onChange={this.handleAdd} ref={(input) => { this.inputElement = input; }} />
          </StyledInput>
          {this.renderActionBtn(limit, actionText)}
        </StyledSubContainer>
      </StyledContainer>
    );
  }
}
MultiImgUpload.defaultProps = {
  limit: 0,
  actionText: 'Upload'
};
export default MultiImgUpload;
