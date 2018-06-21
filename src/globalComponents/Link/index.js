import Styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';

const LinkStyles = css`
  margin: 0;
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
    text-decoration: underline;
  }
`

export const Link = Styled.a`${LinkStyles}`
export const ReactRouterLink = Styled(RouterLink)`${LinkStyles}`
export default Link
