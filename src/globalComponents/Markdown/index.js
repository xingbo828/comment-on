import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withProps } from 'recompose';
import MarkdownContainer from './Styles';

import Link from '../Link';
import {
  Heading,
  Paragraph
} from '../Typography';

import { List, ListItem } from '../Typography/List'

const DynamicHeading = withProps(({ level }) => ({ wrapperTag: `h${level}` }))(Heading);

const index = ({ children, ...rest }) => {
  const renderers = {
    link: Link,
    paragraph: Paragraph,
    heading: DynamicHeading,
    list: List,
    listItem: ListItem
  };
  return (
    <MarkdownContainer>
      <ReactMarkdown source={children} {...rest} renderers={renderers}/>
    </MarkdownContainer>
  );
};

export default index;
