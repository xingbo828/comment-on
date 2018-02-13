import React from 'react'
import Styled from 'styled-components'

const Link = Styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration none;
  cursor: pointer;

  ${props => props.secondary && `
    color: ${props.theme.colors.secondary};
  `}

`

export default Link