import Stlyed from 'styled-components'


export const HairlineDivider = Stlyed.div`
  margin: 0 0 1rem;
  border-top: 1px dashed ${props=>props.theme.colors.border};
`