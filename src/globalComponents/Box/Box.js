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

  if (!property) {
    return 0
  }

  if (typeof property === 'number') {
    return property
  }

  switch(size) {
    case 'lg':
      if(property['lg'] > -1) return property['lg']
      // falls through
    case 'md':
      if(property['md'] > -1) return property['md']
      // falls through
    case 'sm':
      if(property['sm'] > -1) return property['sm']
      // falls through
    case 'xs':
      if(property['xs'] > -1) return property['xs']
      // falls through
    default:
      return 0
  }
}

const getDirection = (property, size) => {

  if (typeof property === 'boolean' && property) {
    return 'flex-direction: row'
  }

  if (!property) {
    return 0
  }

  switch(size) {
    case 'lg':
      if (property === 'lg') return 'flex-direction: row'
      // falls through
    case 'md':
      if(property === 'md') return 'flex-direction: row'
      // falls through
    case 'sm':
      if(property === 'sm') return 'flex-direction: row'
      // falls through
    case 'xs':
      if(property === 'xs') return 'flex-direction: row'
      // falls through
    default:
      return 0
  }
}


const Box = Styled.div`
    display: flex;
    flex-direction: column;

    // TODO: Maybe remove this, then remove all margin from global components and require <Box> for spacing
    > *:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }

    ${props=>props.theme.media.lessThan('xs')`
      ${getDirection(props.inline, 'xs')};
      padding: ${props.inset || props.inset === 0 ? `${smallScreenLevels[getLevelIndex(props.inset, 'xs')]}rem` : `${smallScreenLevels[getLevelIndex(props.vertical, 'xs')]}rem ${smallScreenLevels[getLevelIndex(props.horizontal, 'xs')]}rem`};
      ${ props.below || props.below === 0 ? `padding-bottom: ${smallScreenLevels[getLevelIndex(props.below, 'xs')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${getDirection(props.inline, 'xs') ? `0 ${smallScreenLevels[getLevelIndex(props.between, 'xs')]}rem 0 0` : `0 0 ${smallScreenLevels[getLevelIndex(props.between, 'xs')]}rem 0`};
      }
    `};

    ${props=>props.theme.media.between('xs', 'sm')`
      ${getDirection(props.inline, 'sm')};
      padding: ${props.inset || props.inset === 0 ? `${smallScreenLevels[getLevelIndex(props.inset, 'sm')]}rem` : `${smallScreenLevels[getLevelIndex(props.vertical, 'sm')]}rem ${smallScreenLevels[getLevelIndex(props.horizontal, 'sm')]}rem`};
      ${ props.below || props.below === 0 ? `padding-bottom: ${smallScreenLevels[getLevelIndex(props.below, 'sm')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${getDirection(props.inline, 'xs') ? `0 ${smallScreenLevels[getLevelIndex(props.between, 'sm')]}rem 0 0` : `0 0 ${smallScreenLevels[getLevelIndex(props.between, 'sm')]}rem 0`};
      }
    `};

    ${props=>props.theme.media.between('sm', 'md')`
      ${getDirection(props.inline, 'md')};
      padding: ${props.inset || props.inset === 0 ? `${largeScreenLevels[getLevelIndex(props.inset, 'md')]}rem` : `${largeScreenLevels[getLevelIndex(props.vertical, 'md')]}rem ${largeScreenLevels[getLevelIndex(props.horizontal, 'md')]}rem`};
      ${ props.below || props.below === 0 ? `padding-bottom: ${largeScreenLevels[getLevelIndex(props.below, 'md')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${getDirection(props.inline, 'xs') ? `0 ${largeScreenLevels[getLevelIndex(props.between, 'md')]}rem 0 0` : `0 0 ${largeScreenLevels[getLevelIndex(props.between, 'md')]}rem 0`};
      }
    `};

    ${props=>props.theme.media.greaterThan('md')`
      ${getDirection(props.inline, 'lg')};
      padding: ${props.inset || props.inset === 0 ? `${largeScreenLevels[getLevelIndex(props.inset, 'lg')]}rem` : `${largeScreenLevels[getLevelIndex(props.vertical, 'lg')]}rem ${largeScreenLevels[getLevelIndex(props.horizontal, 'lg')]}rem`};
      ${ props.below || props.below === 0 ? `padding-bottom: ${largeScreenLevels[getLevelIndex(props.below, 'lg')]}rem;` : '' }
      > *:not(:last-child) {
        margin: ${getDirection(props.inline, 'xs') ? `0 ${largeScreenLevels[getLevelIndex(props.between, 'lg')]}rem 0 0` : `0 0 ${largeScreenLevels[getLevelIndex(props.between, 'lg')]}rem 0`};
      }
    `};
`


Box.propTypes = {
  tag: PropTypes.string,
  inline: PropTypes.bool,
  between: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10,11,12,null]),
  // props.vertical: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10,11,12,null]),
  horizontal: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10,11,12,null]),
  inset: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10,11,12,null])
}

Box.defaultProps = {
  tag: 'div',
  inline: null,
  between: null,
  horizontal: null,
  vertical: null,
  inset: null,
  below: null
}

export default Box
