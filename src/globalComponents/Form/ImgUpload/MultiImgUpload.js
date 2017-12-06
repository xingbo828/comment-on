import React, { Component } from 'react';
import { number, oneOf, oneOfType, node, string, func, array } from 'prop-types';
import {
  StyledContainer,
  StyledImgRemove,
  StyledImgList,
  StyledImgListItem,
  StyleImg,
  StyledInput,
  StyledUpLoadBtn
} from './Styled';

class MultiImgUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images.map(img => ({ imageUrl: img })),
      files: this.props.images
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.renderActionBtn = this.renderActionBtn.bind(this);
  }

  componentDidUpdate() {
    this.props.onChange(this.state.files);
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
    let files = this.state.files.concat([img]);
    this.getBase64(img, (imgData) => {
      currentImages = currentImages.concat([{
        imageUrl: imgData
      }]);
      this.setState({
        images: currentImages,
        files
      });
    });

  }

  handleRemove(event, index) {
    const currentImages = this.state.images.filter((img, key) => key !== index);
    const currentFiles = this.state.files.filter((file,key)=> key !== index);
    this.setState({
      images: currentImages,
      files: currentFiles
    });
  }

  renderImges(imgs, shape, size) {
    return imgs.map((img, index) => {
      return (
        <StyledImgListItem key={index}>
          <StyledImgRemove shape={shape} size={size} onClick={(e)=>{this.handleRemove(e, index)}} />
          <StyleImg shape={shape} size={size}><img src={img.imageUrl} alt=""/></StyleImg>
        </StyledImgListItem>
      );
    });
  }

  renderActionBtn(limit, actionText, shape, size) {
    if ( limit!==0 && this.state.images.length >= limit){
      return null;
    }
    return <StyledUpLoadBtn shape={shape} size={size} onClick={this.handleClick}>{actionText}</StyledUpLoadBtn>;
  }

  render() {
    const { input, actionText, limit, name, shape, size } = this.props;
    return (
      <StyledContainer>
          <StyledImgList>
            {this.renderImges(this.state.images, shape, size)}
          </StyledImgList>
          <StyledInput>
            <input type="file" name={name} onChange={this.handleAdd} ref={(input) => { this.inputElement = input; }} />
          </StyledInput>
          {this.renderActionBtn(limit, actionText, shape, size)}
      </StyledContainer>
    );
  }
}
MultiImgUpload.defaultProps = {
  limit: 0,
  actionText: 'Upload',
  images: [],
  onChange: () => {},
  shape: 'square',
  size: 100
};

MultiImgUpload.propTypes = {
  limit: number.isRequired,
  actionText: oneOfType([string, node]),
  images: array.isRequired,
  onChange: func.isRequired,
  shape: oneOf(['circle', 'square']),
  size: number
};

export default MultiImgUpload;
