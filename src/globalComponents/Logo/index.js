import React from 'react'
import Styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import logoSvg from './logo.svg'


const Container = Styled.img`
  z-index: 100;
  width: 75px;
  ${props=>props.theme.media.greaterThan('sm')`
    width: 100px;
  `}
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`

const Logo = ({ history }) => {
  console.log(logoSvg)
  // TODO: Move navigation logic
  const goToHome = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/'
    })
  };

  return (
    <Container onClick={goToHome} src={logoSvg} />
  )
}

export default withRouter(Logo);
