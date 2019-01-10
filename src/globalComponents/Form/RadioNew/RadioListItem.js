import React from 'react'
import Styled from 'styled-components'
import Radio from './Radio'
import Animation from '../../Animation';



const Container = Styled.div`
  cursor: pointer;
  transition: .2s;
  overflow: hidden;

  ${props=>props.checked &&
    `
      background: ${props.theme.colors.offWhite};
    `
  }

  &:hover {
    background: ${props=>props.theme.colors.offWhite};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${props=>props.theme.colors.border};
  }
`

const ClickableArea = Styled.div`
  padding: 2rem 2rem 0rem;

  * { 
    cursor: pointer
  }
`
const Children = Styled.div`
  padding: 0 calc(2rem + 39px) 1rem;
`

const RadioListItem = ({ children, secondary, label, description, value, onCheck, checked, name, icon }) => {

  const handleClick = () => {
    if (!checked) {
      onCheck(value)
    }
  }

  return (
    <Container checked={checked} onClick={handleClick}>
      <ClickableArea>
        <Radio 
          label={label}
          description={description}
          value={value}
          onCheck={onCheck}
          checked={checked}
          name={name}
          secondary={secondary}
          icon={icon}
        />
      </ClickableArea>
      <Children>
        {children && (
          <Animation.Reveal timeout={500} in={checked}>
            {() => children}
          </Animation.Reveal>
        )}
      </Children>
    </Container>
  )
}


export default RadioListItem
