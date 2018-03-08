import styled from 'styled-components';

export const Hero = styled.div`
  min-height: 400px;
  height: 100vh;
  margin-top: -100px;
  width: 100%;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 1;

  div::after {
    content: "";
    background: url('https://media.istockphoto.com/vectors/crossroad-graphic-black-white-landscape-sketch-illustration-vector-vector-id623666484') center center no-repeat;
    background-size: contain;
    opacity: .004;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }
`;


export const Banner = styled.div`
  color: ${props=>props.theme.colors.offWhite};
  text-align: center;
  padding: 4rem 0;

  ${props=>props.theme.media.greaterThan('md')`
    padding: 0 0 6rem;
  `};
`;

export const InnerContainer = styled.div`
  width: 100%;
`;


export const StepsContainer = styled.div`
  padding: 20rem 0;
`

