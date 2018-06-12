import Styled from 'styled-components'

const Paragraph = Styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${props=>props.theme.colors.textLight};
  
  ${props=>props.center && `
    text-align: center;
  `}
`

export default Paragraph
