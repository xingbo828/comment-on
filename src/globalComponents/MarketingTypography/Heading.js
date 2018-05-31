import React from 'react';
import PropTypes from 'prop-types'
import Styled from 'styled-components';
import { withTheme } from 'styled-components';


const MarketingHeading = ({ className, wrapperTag, children, theme, size, centered, underlay, eyebrow }) => {
  
  const baseSize = 1;
  const underlayMultiplier = 5;
  const eyebrowMultiplier  = .5;
  const fontSizesWide = {
    xs: baseSize,
    sm: baseSize * 1.5,
    md: baseSize * 2.5,
    lg: baseSize * 3,
    xl: baseSize * 4
  }

  const fontSizesThin = {
    xs: baseSize * .75,
    sm: baseSize * 1,
    md: baseSize * 1.5,
    lg: baseSize * 1.75,
    xl: baseSize * 2
  }

  const HeadingContainer = Styled.div`
    margin: 0 0 1rem;
    position: relative;
    line-height: 1.39;

    ${underlay && `
      padding-top: ${fontSizesThin[size] * underlayMultiplier}rem;
      &:after {
        font-weight: 800;
        content: '${underlay}';
        text-transform: uppercase;
        position: absolute;
        z-index: -1;
        right: 0;
        left: 0;
        bottom: 0;
        line-height: .81;
        font-size: ${fontSizesThin[size] * underlayMultiplier}rem; 
        text-align: center;
        // color: ${theme.colors.offWhite};
        color: #f8fafd;
      }
    `}

    ${eyebrow && `
      &:before {
        display: block;
        font-weight: 700;
        letter-spacing: .08rem;
        content: "${eyebrow}";
        bottom: 0;
        font-size: ${fontSizesThin[size] * eyebrowMultiplier}rem; 
        color: ${theme.colors.primary};
      }
    `}

    ${centered && `
      text-align: center;
    `}

    ${props=>props.theme.media.greaterThan('sm')`
      &:before {
        font-size: ${fontSizesWide[size] * eyebrowMultiplier}rem; 
      }
      &:after {
        font-size: ${fontSizesWide[size] * underlayMultiplier}rem; 
      }
    `}
  `;

  const Tag = Styled[wrapperTag]`
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.colors.secondary};
    font-size: ${fontSizesThin[size]}rem;

    ${props=>props.theme.media.greaterThan('sm')`
      font-size: ${fontSizesWide[size]}rem;
    `}
  `;

  return (
    <HeadingContainer className={className}>
      <Tag>{ children }</Tag>
    </HeadingContainer>
  );
};

MarketingHeading.defaultProps = {
  size: 'sm',
  eyebrow: ""
}

MarketingHeading.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  eyebrow: PropTypes.string
}

export default withTheme(MarketingHeading);
