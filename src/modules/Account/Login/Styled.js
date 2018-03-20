import Styled from 'styled-components';

const WrapperDiv = Styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerDiv = Styled.div`
  width: 400px;
  padding 2rem;
  border-radius: 3px;
  box-shadow: ${props=>props.theme.boxShadow.large};
  text-align: center;
`;

const FacebookButton = Styled.button`
  font-size: 1rem;
  appearance: none;
  width: 100%;
  margin: 0 auto 1rem;
  padding: 1rem 0;
  color: white;
  border: none;
  cursor: pointer;
  background: #3b5998;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  box-shadow: ${props=>props.theme.boxShadow.small};

  &:before {
    width: 50px;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    content: "\f09a";
    font-family: FontAwesome;
    margin: 0 1rem 0 0;
    background: rgba(0,0,0,.1);
    padding: 1rem 0;
  }
`;

const GoogleButton = Styled.button`
  font-size: 1rem;
  appearance: none;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  color: white;
  border: none;
  cursor: pointer;
  background: #db3236;
  overflow: hidden;
  text-align: center;
  position: relative;
  border-radius: 2px;
  box-shadow: ${props=>props.theme.boxShadow.small};

  &:before {
    width: 50px;
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    content: "\f0d5";
    font-family: FontAwesome;
    margin: 0 1rem 0 0;
    background: rgba(0,0,0,.1);
    padding: 1rem 0;
  }
`;

const StyledH1 = Styled.h1`
  position: relative;
  font-size: 1rem;
  margin: 0 0 2rem;
  z-index: 3;

  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: white;
    top: .5rem;
    width: 100px;
    z-index: -1;
    left: 117px;
  }

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #d3d3d3;
    top: .5rem;
    z-index: -2;
  }
`;

const LogoPlaceholder = Styled.div`
  background: #ececec;
  color: white;
  margin: 0 auto;
  padding: 2rem 3rem;
  display: inline-block;
  margin: 2rem 0 0;
`;

const LogoWrapper = Styled.div`
  margin: 2rem 0 3rem;
`

export {
    WrapperDiv,
    FacebookButton,
    GoogleButton,
    StyledH1,
    LogoPlaceholder,
    InnerDiv,
    LogoWrapper
};
