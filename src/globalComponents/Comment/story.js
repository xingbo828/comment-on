import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Comment from './Comment';

const copy = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';

const DefaultComment = () => {
  return (
    <div style={{width: '800px', padding: '100px'}}>
    <Comment
      name={text('Name', 'Steve Jobs')}
      meta={text('Meta', 'CEO')}
      copy={text('Copy', copy)}
    />
    </div>
  );
};


const WithReview = () => {
  return (
    <div style={{width: '800px', padding: '100px'}}>
    <Comment
      name={text('Name', 'Steve Jobs')}
      meta={text('Meta', 'Oct. 17 2017')}
      stars={number('Rating', 4.5)}
      copy={text('Copy', copy)}
    />
    </div>
  );
};

const CommentStory = storiesOf('Global/Data Display/Comment', module)
  .addDecorator(withKnobs)
  .add('Default', withInfo('')(DefaultComment))
  .add('Review', withInfo('')(WithReview))

export default CommentStory;
