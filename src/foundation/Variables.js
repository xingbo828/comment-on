
import { css } from 'styled-components'

// Colors
export const primaryColor = '#6b6bd5';
export const borderPrimary = '#d3d3d3';
export const buttonPrimary = 'red';
export const textDark = '#525458';
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