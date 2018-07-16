import React from 'react';
import Styled from 'styled-components';
import { withTheme } from 'styled-components';


const Heading = ({ className, wrapperTag, children, underline, indent, theme, size }) => {

  const HeadingContainer = Styled.div`
    margin: 0;

    ${size === 'sm' && `
      margin: 0 0 .5rem;
    `}

    ${size === 'xs' && `
      margin: 0 0 .5rem;
    `}
  `;

  const Tag = Styled[wrapperTag]`
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;

    ${size === 'xl' && `
      font-size: 2rem;
    `}

    ${size === 'lg' && `
      font-size: 1.75rem;
    `}

    ${size === 'md' && `
      font-size: 1.5rem;
    `}

    ${size === 'sm' && `
      font-size: 1.25rem;
    `}

    ${size === 'xs' && `
      font-size: 1rem;
    `}


    ${theme.media.greaterThan('md')`
      ${size === 'xl' && `
        font-size: 3rem;
        font-weight: 800;
      `}

      ${size === 'lg' && `
        font-size: 2rem;
      `}

      ${size === 'md' && `
        font-size: 1.5rem;
        font-weight: 300;
      `}

      ${size === 'sm' && `
        font-size: 1.25em;
      `}

      ${size === 'xs' && `
        font-size: 1rem;
      `}
    `};

    ${indent && `
      padding: 0 0 0 1rem;

      ::before{
        content: '';
        position: absolute;
        width: 4px;
        background: ${theme.colors.primary};
        bottom: 0;
        top: 0;
        left: 0;
      }
    `}

    ${underline && `
      padding: 0 0 1rem;

      ::after{
        content: '';
        position: absolute;
        height: 4px;
        background: ${theme.colors.primary};
        bottom: 0;
        right: 50%;
        left: 0;
      }
    `}
  `;

  return (
    <HeadingContainer className={className}>
      <Tag>{ children }</Tag>
    </HeadingContainer>
  );
};

export default withTheme(Heading);
