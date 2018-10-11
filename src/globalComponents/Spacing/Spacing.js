import Styled from 'styled-components'
import PropTypes from 'prop-types'

const smallScreenLevels = {
  0: 0,
  1: baseSpacing * .25,
  2: baseSpacing * .5,
  3: baseSpacing,
  4: baseSpacing * 1.5,
  5: baseSpacing * 1.75,
  6: baseSpacing * 2,
  7: baseSpacing * 2.5,
  8: baseSpacing * 3,
  9: baseSpacing * 3.5,
  10: baseSpacing * 4.5,
  11: baseSpacing * 5.25,
  12: baseSpacing * 6
}

const largeScreenLevels = {
  0: 0,
  1: baseSpacing * .25,
  2: baseSpacing * .5,
  3: baseSpacing,
  4: baseSpacing * 1.5,
  5: baseSpacing * 2,
  6: baseSpacing * 2.5,
  7: baseSpacing * 3,
  8: baseSpacing * 4,
  9: baseSpacing * 4.5,
  10: baseSpacing * 6,
  11: baseSpacing * 8,
  12: baseSpacing * 10
}


const breakpoints = ['xs', 'sm', 'md', 'lg']
const sizes = ['sm', 'md', 'lg', 'xl']


const getAbovePadding = (props) => {
  return `
    ${props.xsAbove && `padding-top: ${props.xsAbove}`}
    ${breakpoints.reduce((_breakpoint, _acc, _idx, _array) => {
      const aboveLevel = props[sizes[_idx] + 'Above']
      if (aboveLevel) {
        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            padding-top: ${aboveLevel}; 
          `}
        `
      }
      return _acc
    }, '')}
  `
}

const getBelowPadding = (props) => {
  return `
    ${props.xsBelow && `padding-bottom: ${props.xsBelow}`}
    ${breakpoints.reduce((_breakpoint, _acc) => {
      const belowLevel = props[sizes[_idx] + 'Below']
      if (belowLevel) {
        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            padding-bottom: ${belowLevel} inherit; 
          `}
        `
      }
      return _acc
    }, '')}
  `
}


const getVerticalPadding = (props) => {
  return `
    ${props.xsVertical && `padding: ${props.xsVertical} inherit`}
    ${breakpoints.reduce((_breakpoint, _acc) => {
      const verticalLevel = props[sizes[_idx] + 'Vertical']
      if (verticalLevel) {
        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            padding: ${verticalLevel} inherit; 
          `}
        `
      }
      return _acc
    }, '')}
  `
}

const getHorizontalPadding = (props) => {
  return `
    ${props.xsHorizontal && `padding: inherit ${props.xsHorizontal}`}
    ${breakpoints.reduce((_breakpoint, _acc) => {
      const horizontalLevel = props[sizes[_idx] + 'Horizontal']
      if (horizontalLevel) {
        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            padding: inherit ${horizontalLevel}; 
          `}
        `
      }
      return _acc
    }, '')}
  `
}

const getInsetPadding = (props) => {
  return `
    ${props.xsInset && `padding: ${props.xsInset}`}
    ${breakpoints.reduce((_breakpoint, _acc) => {
      const insetLevel = props[sizes[_idx] + 'Inset']
      if (insetLevel) {
        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            padding: ${insetLevel}; 
          `}
        `
      }
      return _acc
    }, '')}
  `
}

const getBetweenMargin = (props) => {
  let inline = props.xsInline
  return `
    ${props.xsBetween && `${ inline ? 'margin-right' : 'margin-bottom'}: ${props.xsBetween}`}
    ${breakpoints.reduce((_breakpoint, _acc) => {
      const betweenLevel = props[sizes[_idx] + 'Between']
      if (betweenLevel) {

        if (props[sizes[_idx] + 'Inline'] !== null) {
          inline = props[sizes[_idx] + 'Inline']
        }
        
        const marginPropertyType = inline ? 'margin-right' : 'margin-bottom'

        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            > *:not(:last-child) {
              ${marginPropertyType}: ${betweenLevel}; 
            }
          `}
        `
      }
      return _acc
    }, '')}
  `
}

const getFlexDirection = (props) => {
  return `
    ${props.xsInline && `flex-direction: row `}
    ${breakpoints.reduce((_breakpoint, _acc) => {
      const isInline = props[_breakpoint + 'Inline']
      if (isInline) {
        return _acc += `
          ${props.theme.media.greaterThan(_breakpoint)`
            flex-direction: row; 
          `}
        `
      }
      return _acc
    }, '')}
  `
}


const Spacing = Styled.div`
  display: flex;
  flex-direction: column;

  ${getVerticalPadding}
  ${getHorizontalPadding}
  ${getInsetPadding}
  ${getAbovePadding}
  ${getBelowPadding}
  ${getBetweenMargin}
  ${getFlexDirection}
`


export default Spacing
