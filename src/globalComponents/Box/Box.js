import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const baseSpacing = 1;

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

const getLevelIndex = (property, size) => {
  if (typeof property === 'number') {
    return property
  }

  if (size === 'xs') {
    return property.xs || 0
  }

  if (size === 'sm') {
    return property.sm || property.xs || 0
  }

  if (size === 'md') {
    return property.md || property.sm || property.xs || 0
  }

  if (size === 'lg') {
    return property.lg || property.md || property.sm || property.xs || 0
  }

  return 0
}


const Box = ({ children, tag, inline, between, vertical, horizontal, below, inset, ...rest }) => {
  const Component = Styled[tag]`
    display: flex;
    // justify-content: space-between;
    flex-direction: ${inline ? 'row' : 'column' };

    ${props=>props.theme.media.lessThan('xs')`
      padding: ${inset ? `${smallScreenLevels[getLevelIndex(inset, 'xs')]}rem` : `${smallScreenLevels[getLevelIndex(vertical, 'xs')]}rem ${smallScreenLevels[getLevelIndex(horizontal, 'xs')]}rem`};
      ${ below ? `padding-bottom: ${smallScreenLevels[getLevelIndex(below, 'xs')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${inline ? `0 ${smallScreenLevels[getLevelIndex(between, 'xs')]}rem 0 0` : `0 0 ${smallScreenLevels[getLevelIndex(between, 'xs')]}rem 0`};
      }
    `};

    ${props=>props.theme.media.between('xs', 'sm')`
      padding: ${inset ? `${smallScreenLevels[getLevelIndex(inset, 'sm')]}rem` : `${smallScreenLevels[getLevelIndex(vertical, 'sm')]}rem ${smallScreenLevels[getLevelIndex(horizontal, 'sm')]}rem`};
      ${ below ? `padding-bottom: ${smallScreenLevels[getLevelIndex(below, 'sm')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${inline ? `0 ${smallScreenLevels[getLevelIndex(between, 'sm')]}rem 0 0` : `0 0 ${smallScreenLevels[getLevelIndex(between, 'sm')]}rem 0`};
      }
    `};

    ${props=>props.theme.media.between('sm', 'md')`
      padding: ${inset ? `${largeScreenLevels[getLevelIndex(inset, 'md')]}rem` : `${largeScreenLevels[getLevelIndex(vertical, 'md')]}rem ${largeScreenLevels[getLevelIndex(horizontal, 'md')]}rem`};
      ${ below ? `padding-bottom: ${largeScreenLevels[getLevelIndex(below, 'md')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${inline ? `0 ${largeScreenLevels[getLevelIndex(between, 'md')]}rem 0 0` : `0 0 ${largeScreenLevels[getLevelIndex(between, 'md')]}rem 0`};
      }
    `};

    ${props=>props.theme.media.greaterThan('md')`
      padding: ${inset ? `${largeScreenLevels[getLevelIndex(inset, 'lg')]}rem` : `${largeScreenLevels[getLevelIndex(vertical, 'lg')]}rem ${largeScreenLevels[getLevelIndex(horizontal, 'lg')]}rem`};
      ${ below ? `padding-bottom: ${largeScreenLevels[getLevelIndex(below, 'lg')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${inline ? `0 ${largeScreenLevels[getLevelIndex(between, 'lg')]}rem 0 0` : `0 0 ${largeScreenLevels[getLevelIndex(between, 'lg')]}rem 0`};
      }
    `};
  `
  return (
    <Component {...rest}>
      {children}
    </Component>
  )
}

Box.propTypes = {
  tag: PropTypes.string,
  inline: PropTypes.bool,
  between: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10]),
  vertical: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10]),
  horizontal: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10]),
  inset: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10])
}

Box.defaultProps = {
  tag: 'div',
  inline: false,
  between: 0,
  horizontal: 0,
  vertical: 0,
  inset: 0,
  below: 0
}

export default Box