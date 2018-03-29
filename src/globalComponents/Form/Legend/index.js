import Styled from 'styled-components'

const Legend = Styled.div`
  padding: 0 0 1rem;
  margin: 0 0 2rem;
  font-size: 1.25rem;
  font-weight: 200;
  position: relative;
  line-height: 1.5;

  ${props=>props.theme.media.greaterThan('xs')`
    font-size: 1.5rem;
  `};

  ${props=>props.theme.media.greaterThan('sm')`
    font-size: 2rem;
  `};

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