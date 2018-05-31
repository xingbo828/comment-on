import Styled from 'styled-components'


const getColor = ({ type, theme }) => {
  return {
    primary: theme.colors.danger,
    secondary: theme.colors.primary,
    tertiary: theme.colors.secondary
  }[type]
}

export const Container = Styled.div`
  position: relative;
  overflow: hidden;
  background: ${getColor};

  ${props=>props.number && `
    &:after {
      font-size: 1.125rem;
      top: 1rem;
      left: 1rem;
      position: absolute;
      content: '${props.number}';
      height: 40px;
      width: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 99rem;
      border: 2px solid rgba(255,255,255,.3);
      color: white;
      font-weight: 800;
    }
  `}
  
  &:before {
    z-index: 1 !important;
    content: '';
    background: white;
    transition: .5s;
    position: absolute;
    right: 0;
    top: 100px;
    transform-origin: 100% 0 0;
    width: 400%;
    height: 400%;
    transform: rotate(-30deg);
  }

  &:hover {
    &:before {
      top: 100%;
    }

    button {
      opacity: 1;
      transform: scale(1);
    }

    *:not(button) {
      color: white;
    }
  }

  button {
    opacity: 0;
    transform: scale(.95);
  }

  * {
    position: relative;
    z-index: 2
  }
`

export const Image = Styled.div`
  margin: 100px auto 0;
  padding: 0 0 58%;
  width: 58%;
  height: 100px;
  background: no-repeat center center url(${props=>props.src});
  background-size: contain;
`

export const Eyebrow = Styled.span`
  color: ${getColor};
  font-weight: 600;
  text-transform: uppercase;
  transition: .3s;
`

export const Heading = Styled.h3`
  font-size: 2rem;
  transition: .3s;
  line-height: 1.39;
`

export const Paragraph = Styled.p`
  transition: .3s;
  margin: 0;
  line-height: 1.5;
`

export const CTA = Styled.button`
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  display: inline-block;
  appearance: none;
  box-shadow: ${props=>props.theme.boxShadow.small};
  min-width: 120px;
  padding: 0.875rem 1.5rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 99rem;
  color: ${getColor} !important;

  &:active {
    transition: .1s;
    transform: scale(.96) !important;
  }
`