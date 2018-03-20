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
  width: 20%;
  margin: 0 0 1rem;
  list-style-type: none;
`