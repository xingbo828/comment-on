import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  text-align: center;
`;

const H1 = styled.h1`
  color: blue;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;
const HomePage = () => (
  <Container>
    <Logo src={logo} alt="logo" />
    <H1>~~~Hello world~~~</H1>
    <p>{process.env.NODE_ENV}</p>
  </Container>
);

export default HomePage;
