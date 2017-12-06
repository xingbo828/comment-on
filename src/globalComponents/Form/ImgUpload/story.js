import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import ImgUpload from '../../../globalComponents/Form/ImgUpload';
import Icon from '../../../globalComponents/Icon';

const { SingleImgUpload, MultiImgUpload } = ImgUpload;

const initSrcValue = 'https://i1.wp.com/www.data-spot.com/wp-content/uploads/avatar-2.png?fit=400%2C400&ssl=1&w=640';

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
    value={input.value}
    onChange={input.onChange}
    actionText="Upload"
    name="avatar"
    label="Avatar"
  />
);

const CircularSingleImgUploadDemo = withInfo('Circular single image upload')(() =>
  <SingleImgUpload
    value={input.value}
    onChange={input.onChange}
    actionText="Upload"
    name="avatar"
    label="Avatar"
    shape="circle"
    size={150}
  />
);

const MultiImgUploadDemo = withInfo('Multiple images upload')(() =>
  <MultiImgUpload
    images={images}
    limit={3}
    label="Profile Images"
    onChange={input.onChange}
    actionText={<Icon icon="upload" size="2x" />}
  />
);

const ImageUploadStory = storiesOf('Global/Data Entry/ImgUpload', module)
  .add('Single image upload', SingleImgUploadDemo)
  .add('Circular single image upload', CircularSingleImgUploadDemo)
  .add('Multiple images upload', MultiImgUploadDemo);

export default ImageUploadStory;
