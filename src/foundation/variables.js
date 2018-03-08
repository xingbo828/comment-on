import { generateMedia } from 'styled-media-query';

const colors = {
  // brand: '#FFA500',
  brand: '#FFA500',
  secondaryLight: '#3067A7',
  secondary: '#1d407f',
  secondaryDark: '#1a325d',
  border: '#dee0df',
  danger: '#f04134',
  success: '#42b56b',
  textDarkest: '#2d2d2d',
  textDark: '#525458',
  textLight: '#a6a7a9',
  // offWhite: '#f8f8f8',
  offWhite: '#F4F5F7',
  darkOffWhite: '#ecedf2',
  primaryDark: '#f6820c',
  primaryLight: '#FFD17B',
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
