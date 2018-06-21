import { generateMedia } from 'styled-media-query';

const colors = {
  // brand: '#FFA500',
  brand: '#FFBF37',
  secondaryLight: '#3d95e6',
  secondary: '#228ae6',
  secondaryDark: '#1a71bd',
  border: '#E6E9ED',
  danger: '#FF6B6B',
  success: '#0ACB7A',
  textDarkest: '#2d2d2d',
  textDark: '#525458',
  textLight: '#a6a7a9',
  offWhite: '#f4f6f9',
  darkOffWhite: '#ecedf2',
  primaryDark: '#ffac37',
  primaryLight: '#ffe17b',
  // alias
  get info() { return this.secondary },
  get error() { return this.danger },
  get primary(){ return this.brand },
  get disabled() { return this.offWhite}
}

const zIndex = {
  negative: -1,
  spinner: 500,
  dropdownBackdrop: 900,
  dropdown: 1000,
  navigation: 1000,
  modal: 1500,
  modalBackdrop: 1400,
  popover: 1600
}

const boxShadow = {
  small: 'rgba(23,43,99,0.26) 0 7px 42px',
  large: 'rgba(29,29,31,0.15) 0 10px 60px'
}

const spaces = {
  _baseInRem: 1,
  get base() { return `${this._baseInRem}rem` },
  get xTight(){ return `${this._baseInRem * .25}rem` },
  get tight(){ return `${this._baseInRem * .5}rem` },
  get wide(){ return `${this._baseInRem * 2}rem` },
  get xWide(){ return `${this._baseInRem * 4}rem` }
}

const fontWeights = {
  thin: 300,
  light: 400,
  roman: 600,
  medium: 700
}

const breakPoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
}

export default {
  colors,
  fontWeights,
  zIndex,
  spaces,
  breakPoints,
  boxShadow,
  media: generateMedia(breakPoints)
}
