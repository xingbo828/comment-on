import Styled from 'styled-components'

export const ProvinceHeading = Styled.h3`
  text-transform: uppercase;
  letter-spacing: .05em;
  color: ${props=>props.theme.colors.border};
  padding: 0 0 1rem;
  margin: 0 0 2rem;
  border-bottom: 1px solid ${props=>props.theme.colors.border};
`

export const CityList = Styled.ul`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const City = Styled.li`
  width: 100%;
  margin: 0 0 1rem;
  list-style-type: none;

  ${props=>props.theme.media.greaterThan('md')`
    width: 20%;
  `}

  ${props => props.comingSoon && `
    &:after {
      content: 'Coming soon';
      display: inline-block;
      padding: .4rem .5rem;
      margin-left: .75rem;
      font-size: .5rem;
      font-weight: 600;
      border-radius: 99rem;
      vertical-align: text-top;
      color: ${props.theme.colors.secondaryLight};
      background: ${props.theme.colors.offWhite};
    }
  `}
`

export const ProvinceDetails = Styled.div`
  display: none;

  ${props => props.visible && `
    display: block;
  `}
`