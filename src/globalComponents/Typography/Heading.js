import React from 'react';
import Styled from 'styled-components';
import { withTheme } from 'styled-components';


const Heading = ({ className, wrapperTag, children, underline, theme, size }) => {



  const HeadingContainer = Styled.div`
    margin: 2rem 0 1rem;

    ${size === 'xl' && `
      font-size: 4rem;
    `}

    ${size === 'lg' && `
      font-size: 3rem;
    `}

    ${size === 'md' && `
      font-size: 2.5rem;
    `}

    ${size === 'sm' && `
      font-size: 1.5rem;
    `}

    ${size === 'xs' && `
      margin: 1rem 0;
    `}
  `;

  const Tag = Styled[wrapperTag]`
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;

    ${size === 'xl' && `
      font-size: 4rem;
    `}

    ${size === 'lg' && `
      font-size: 3rem;
    `}

    ${size === 'md' && `
      font-size: 2.5rem;
    `}

    ${size === 'sm' && `
      font-size: 1.5rem;
    `}

    ${size === 'xs' && `
      font-size: 1rem;
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
