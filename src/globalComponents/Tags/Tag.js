import React from 'react'
import Styled from 'styled-components'
import Icon from '../Icon'


const Container = Styled.div`
  display: inline-block;
  display: flex;
`

const Wrapper = Styled.div`
  background: ${props=>props.theme.colors.secondaryPale};
  padding: .5rem 1rem;
  border-radius: 4px;
`

const IconWrapper = Styled(Wrapper)`
  margin-right: 6px;
`

const Tag = ({ title, icon }) => {
  return (
    <Container>
      {icon && (
        <IconWrapper>
          <Icon icon={icon} />
        </IconWrapper>
      )}
      <Wrapper>{title}</Wrapper>
    </Container>
  )
}

export default Tag