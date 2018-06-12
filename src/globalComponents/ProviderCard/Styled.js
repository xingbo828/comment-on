import Styled from 'styled-components'

export const Container = Styled.div`
  border-radius: 4px;
  box-shadow: ${props=>props.theme.boxShadow.large};
`

export const Estimate = Styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 2rem 0 1rem;
  text-align: center;
  background: ${props=>props.theme.colors.secondaryDark};
`

export const LogoContainer = Styled.div`
  border-radius: 4px;
  background: white;
  position: relative;
  z-index: 5;
  margin: 0 auto 1rem;
  padding: 1rem;
  width: 80px;
  height: 80px;
  box-shadow: ${props=>props.theme.boxShadow.small};
`

export const Logo = Styled.div`
  width: 100%;
  height: 100%;
  background: url(${props=>props.src}) center center no-repeat;
  background-size: contain;
`

export const ProviderInfo = Styled.div`
  text-align: center;
  padding: 0 1rem;
  margin: 0 0 2rem;
  position: relative;

  &:before {
    z-index: 0;
    position: absolute;
    content: '';
    display: block;
    height: 40px;
    left: 0;
    right: 0;
    background: ${props=>props.theme.colors.secondaryDark};
  }
`

export const ProviderName = Styled.span`
  font-weight: 600px;
  margin: 0 0 1rem;
`

export const PrimaryAction = Styled.div`
  text-align: center;
  height: 34px;
`

export const SecondaryAction = Styled.div`
    text-align: center;
    padding: 0 0 .5rem;
`