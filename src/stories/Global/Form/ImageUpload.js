import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import ImgUpload from '../../../globalComponents/Form/ImgUpload';

const { SingleImgUpload, MultiImgUpload } = ImgUpload;

const initSrcValue = 'https://weneedfun.com/wp-content/uploads/2015/10/Steve-Jobs-Photos-18.jpg';

const input = {
  value: initSrcValue,
  onChange: action('Image changed')
};

const images = [
    'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458289957powerful-images3.jpg',
    'http://www.mybligr.com/wp-content/uploads/2017/01/most-beautiful-tiger-animals-pics-images-photos-pictures-7-300x300.jpg'
  ];
const multiImgUploadInput = {
  onChange: action('Images changed')
};

const SingleImgUploadDemo = withInfo('Single image upload')(() =>
  <SingleImgUpload
    input={input}
    actionText="Upload"
    name="avatar"
    label="Avatar"
  />
);

const MultiImgUploadDemo = withInfo('Multiple images upload')(() =>
  <MultiImgUpload
    images={images}
    limit={3}
    label="Profile Images"
    input={multiImgUploadInput}
  />
);

const ImageUploadStory = storiesOf('Global/Form/ImgUpload', module)
  .add('Single image upload', SingleImgUploadDemo)
  .add('Multiple images upload', MultiImgUploadDemo);

export default ImageUploadStory;
