import Styled from 'styled-components'

const ThematicBreak = Styled.div`
  height: 2px;
  width: ${props=>props.short ? `3rem` : `100%` };
  background-color: ${props=>props.theme.colors.border};
`

export default ThematicBreak