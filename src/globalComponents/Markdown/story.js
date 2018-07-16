import React from 'react';

import { storiesOf } from '@storybook/react';
import Markdown from './';
const content = `
# This is h1
## This is h2
### This is h3
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered


- item 1
- item 2
- item 3

`


const Usage = () => <Markdown>{content}</Markdown>;



const MarkdownStory = storiesOf('Global/Data Display/Markdown', module)
  .add('Usage', Usage)

export default MarkdownStory;
