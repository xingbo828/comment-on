import React from 'react'
import Styled from 'styled-components'
import Icon from '../../Icon'

const Container = Styled.div`
  position: relative;
  display: block;
  margin: 0 0 1rem;
`

export const IndicatorContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RadioIndicator = Styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 23px;
  height: 23px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  background-color: #fff;
  transition: all .3s;
  margin-right: 1rem;
  border-color: ${props=>props.theme.colors.border};

  ::after {
    position: absolute;
    width: 11px;
    height: 11px;
    left: 5px;
    top: 5px;
    border-radius: 50%;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: ${props => props.color ? props.color : props.theme.colors.primary};
    opacity: ${props => props.checked ? '1' : '0' };
    transform: scale(${props => props.checked ? '1.2' : '0' });
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  }
`;
 
const RadioInput = Styled.input`
  opacity: 0;
  position: absolute;
  height: 20px;
  width: 20px;
  z-index: 1;
  cursor: pointer;
`;

const PseudoLabel = Styled.span`
  font-size: 1rem;
  line-height: 24px;
`

const Description = Styled.p`
  font-size: 1rem;
  flex: 1 100%;
  margin: .5rem 0 .5rem 39px;
  line-height: 1.5;
  font-size: .875rem;
  color: ${props=>props.theme.colors.textLight};
`

const IconContainer = Styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.5rem;
  color: ${props=>props.theme.colors.textLight};
`

const Radio = ({ label, description, value, onCheck, checked, name, secondary, color, icon }) => (
  <Container>
    <label>
      <RadioInput
        type="radio"
        value={value}
        onChange={onCheck}
        checked={checked}
        name={name}
      />
      {
        icon && 
        <IconContainer>
          <Icon icon={icon} />
        </IconContainer>
      }
      <IndicatorContainer>
        <RadioIndicator color={color} checked={checked} />
        <PseudoLabel>{label}</PseudoLabel>
        {description &&
          <Description>{description}</Description>
        }
      </IndicatorContainer>
    </label>
  </Container>
)

export default Radio
