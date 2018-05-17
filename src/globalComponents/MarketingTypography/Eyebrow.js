import React from 'react';
import Styled from 'styled-components';
import { withTheme } from 'styled-components';


const Eyebrow = ({ className, wrapperTag, children, theme, size, centered }) => {


  const EyebrowContainer = Styled.div`
    margin: 0 0 .5rem;

    ${centered && `
      text-align: center;
    `}
  `;

  const Tag = Styled[wrapperTag]`
    text-transform: uppercase;
    letter-spacing: .08rem;
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-weight: bold;
    font-size: .875rem;
    color: ${theme.colors.primary};

    ${size === 'lg' && `
      font-size: 1.5rem;
    `}

    ${size === 'md' && `
      font-size: 1rem;
    `}

    ${size === 'sm' && `
      font-size: .875rem;
    `}
  `;

  return (
    <EyebrowContainer className={className}>
      <Tag>{ children }</Tag>
    </EyebrowContainer>
  );
};

export default withTheme(Eyebrow);
