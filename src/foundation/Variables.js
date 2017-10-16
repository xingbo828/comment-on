import { generateMedia } from 'styled-media-query';

const colors = {
  primary: '#FFA500',
  brand: '#FFA500',
  primaryAction: '#FFA500',
  secondaryAction: '#1d407f',
  dangerAction: '#f04134',
  border: '#d3d3d3',
  buttonPrimary: 'red',
  textDarkest: '#2d2d2d',
  textDark: '#525458',
  textLight: '#a6a7a9',
  offWhite: '#f8f8f8'
}


const zIndex = {
  negative: -1,
  dropdownBackdrop: 900,
  dropdown: 1000,
  navigation: 1000,
  modal: 1500,
  modalBackdrop: 1400,
  popover: 1600
}

const spaces = {
  _baseInRem: 1,
  get base() { return `${this._baseInRem}rem` },
  get xTight(){ return `${this._baseInRem * .25}rem` },
  get tight(){ return `${this._baseInRem * .5}rem` },
  get wide(){ return `${this._baseInRem * 2}rem` }
}

const fontWeights = {
  thin: 300,
  light: 400,
  roman: 500,
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
  media: generateMedia(breakPoints)
}
