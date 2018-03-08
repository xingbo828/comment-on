import Styled from 'styled-components'

const Paragraph = Styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${props=>props.theme.colors.textLight};
`

export default Paragraph
