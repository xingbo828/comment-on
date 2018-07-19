import React from 'react'
import PropTypes from 'prop-types'
import {
  Image
} from './Styled'

const CoverPhoto = ({ src }) => {
  if (!src) {
    return null
  }
  return <Image src={src} />
}

CoverPhoto.prototypes = {
  src: PropTypes.string
}

CoverPhoto.defaultProps = {
  src: null
}

export default CoverPhoto