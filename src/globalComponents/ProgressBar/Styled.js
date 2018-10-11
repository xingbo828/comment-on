import Styled from 'styled-components'

export const Meter = Styled.div`
  position: relative;
  height: 1rem;
  background-color: ${props=>props.theme.colors.offWhite};
  border-radius: 99rem;

  &:before {
    content: '';
    display: block;
    border-radius: 99rem;
    position: absolute;
    transition: width .5s;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${props=>props.theme.colors.secondary};
    width: ${props=>props.value}%;
  }
`