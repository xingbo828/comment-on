import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Comment from '../../globalComponents/Comment';

const DefaultComment = () => {
  return (
    <Comment 
      name={'Steve Jobs'}
      meta={'CEO'}
      copy="Test"
    />
  );
};


const WithReview = () => {
  return (
    <Comment
      name={'Steve Jobs'}
      meta={'Oct. 17 2017'}
      stars={4.5}
      copy="Test"
    />
  );
};

const CommentStory = storiesOf('Global/Comment', module)
  .add('Default', withInfo('')(DefaultComment))
  .add('Review', withInfo('')(WithReview))

export default CommentStory;
