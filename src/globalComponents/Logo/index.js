import React from 'react'
import Styled from 'styled-components'
import { withRouter } from 'react-router-dom';


const svg = '<svg id="Layer_1" width="100%" height="100%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 319.34 251.79"><defs><linearGradient id="linear-gradient" x1="1.48" y1="179.72" x2="180.02" y2="179.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffa712" stop-opacity="0"/><stop offset="0.55" stop-color="#f15f2a" stop-opacity="0.97"/><stop offset="1" stop-color="#f15a24"/></linearGradient></defs><title>vdsvsd</title><path d="M106.05,197.73a8.6,8.6,0,0,1-8.58,8.58H8.58A8.6,8.6,0,0,1,0,197.73V161.87a23.87,23.87,0,0,1,6.07-14.64L47,106.33a8.6,8.6,0,0,1,12.13,0L100,147.22a23.87,23.87,0,0,1,6.07,14.64Z" transform="translate(0 -3.56)" style="fill:#ffa712"/><path d="M319.34,204.17a8.6,8.6,0,0,1-8.58,8.58H115.17a8.6,8.6,0,0,1-8.58-8.58V115a23.87,23.87,0,0,1,6.07-14.64L206.9,6.07a8.6,8.6,0,0,1,12.13,0l94.24,94.24A23.87,23.87,0,0,1,319.34,115Z" transform="translate(0 -3.56)" style="fill:#fcca3f"/><path d="M179.34,185.79a8.6,8.6,0,0,0,0-12.13L111.5,106c-3.34-3.34-6.25-2.21-6.25,2.51V144A7.91,7.91,0,0,1,97,152.17H9.11a9.26,9.26,0,0,0-8.86,9v36.46a8.79,8.79,0,0,0,8.86,8.5H97a8.36,8.36,0,0,1,8.21,8.65v36.1c0,4.72,2.92,5.85,6.25,2.51Z" transform="translate(0 -3.56)" style="fill:url(#linear-gradient)"/></svg>'

const Container = Styled.div`
  display: relative;
  z-index: 100;
  width: 60px;
  height: 60px;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`

const Logo = ({ history }) => {

  // TODO: Move navigation logic
  const goToHome = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/'
    })
  };

  return (
    <Container onClick={goToHome} dangerouslySetInnerHTML={{__html: svg}} />
  )
}

export default withRouter(Logo);
