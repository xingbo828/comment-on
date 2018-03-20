import Styled from 'styled-components'

const Link = Styled.a`
  margin: 0 0 .875rem;
  display: block;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  text-decoration none;
  cursor: pointer;
  transition: .3s;

  ${props => props.inline && `
    display: inline;
  `}

  ${props => props.secondary && `
    color: ${props.theme.colors.secondary};
  `}

  &:hover {
    color: ${props=>props.theme.colors.secondaryLight};
  }

`

export default Link
