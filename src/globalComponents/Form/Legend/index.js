import Styled from 'styled-components'

const Legend = Styled.div`
  padding: 0 0 1rem;
  margin: 0 0 2rem;
  font-size: 2rem;
  font-weight: 200;
  position: relative;
  line-height: 1.5;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 50px;
    height: 4px;
    background: ${props=>props.theme.colors.primary};
  }
`

export default Legend