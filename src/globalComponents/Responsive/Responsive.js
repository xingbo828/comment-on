import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  display: none;

  ${props=>props.theme.media.lessThan('xs')`
    ${props=>(props.from === 'xs') && 'display: block;'}
  `};

  ${props=>props.theme.media.between('xs', 'sm')`
    ${props=>(props.from === 'sm' || props.from === 'xs') && 'display: block;'}
    ${props=>(props.to === 'xs') && 'display: none;'}
  `};

  ${props=>props.theme.media.between('sm', 'md')`
    ${props=>(props.from === 'sm' || props.from === 'xs' || props.from === 'md') && 'display: block;'}
    ${props=>(props.to === 'xs' || props.to === 'sm') && 'display: none;'}
  `};

  ${props=>props.theme.media.greaterThan('md')`
    ${props=>(props.from === 'sm' || props.from === 'xs' || props.from === 'md' || props.from === 'lg') && 'display: block;'}
    ${props=>(props.to === 'xs' || props.to === 'sm'|| props.to === 'md') && 'display: none;'}
  `};

`

const Responsive = ({ from, to, children }) => {
  return (
    <Container from={from} to={to}>{ children }</Container>
  )
}

export default Responsive