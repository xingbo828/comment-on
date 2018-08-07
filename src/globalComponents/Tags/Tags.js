import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Tag from './Tag'
import Icon from '../Icon'


const Container = Styled.div`
  display: inline-block;
  display: flex;
`

const mapTags = (values) => {
  return values.map((value) => <Tag key={value} title={value} />)
}

const Tags = ({ icon, values }) => (
  <Container>
    {icon && (
      <Tag title={<Icon icon={icon} />} />        
    )}
    {mapTags(values)}
  </Container>
)

Tags.propTypes = {
  values: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired
}

export default Tags