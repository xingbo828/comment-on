import React from 'react';
import Styled from 'styled-components';
import { withTheme } from 'styled-components';


const Heading = ({ wrapperTag, children, underline, theme }) => {

  const HeadingContainer = Styled.div`
    margin: 2rem 0 1rem;

    ${underline ? `
      // border-bottom: solid 1px #d3d3d3;
    `: ``}
  `;

  const Tag = Styled[wrapperTag]`
    margin: 0;
    padding: 0 0 1rem;
    font-size: 1.5rem;
    display: inline-block;
    transform: translateY(1px);
    position: relative;
    color: ${theme.colors.textDarkest};

    ${underline ? `
      ::after{
        content: '';
        position: absolute;
        height: 4px;
        background: ${theme.colors.primary};
        bottom: 0;
        right: 50%;
        left: 0;
      }
      // border-bottom: solid 1px ${theme.colors.primary};
    `: ``}
  `;

  return (
    <HeadingContainer>
      <Tag>{ children }</Tag>
    </HeadingContainer>
  );
};

export default withTheme(Heading);