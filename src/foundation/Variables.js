
import { css } from 'styled-components'

// Colors
export const primaryColor = '#FFA500';
export const brandPrimary = '#FFA500';
export const primaryActionColor = '#5aad5e';
export const secondaryActionColor = '#1d407f';
export const dangerActionColor = '#f04134';
export const borderPrimary = '#d3d3d3';
export const buttonPrimary = 'red';
export const textDarkest = '#2d2d2d';
export const textDark = '#525458';
export const textLight = '#a6a7a9';
export const offWhite = '#f8f8f8';
// Media
export const xl = '1200px';
export const large = '992px';
export const medium = '768px';
export const small = '442px';
export const xs = '320px';

// Marins
export const gutterWidth = '5.5%';


export const media = {
  fromSmall: (...args) => css`
    @media (min-width: ${small}) {
      ${css(...args)}
    }
  `,
  fromMedium: (...args) => css`
    @media (min-width: ${medium}) {
      ${css(...args)}
    }
  `
};
