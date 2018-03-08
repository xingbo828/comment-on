import React from 'react';
import Styled from 'styled-components';
import { withTheme } from 'styled-components';


const MarketingHeading = ({ className, wrapperTag, children, theme, size }) => {


  const HeadingContainer = Styled.div`
    margin: 0 0 1rem;
  `;

  const Tag = Styled[wrapperTag]`
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.colors.secondaryLight};

    font-size: 4rem;

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
  `;

  return (
    <HeadingContainer className={className}>
      <Tag>{ children }</Tag>
    </HeadingContainer>
  );
};

export default withTheme(MarketingHeading);
