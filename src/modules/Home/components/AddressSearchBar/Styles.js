import styled from 'styled-components';

export const AddressSearchBarContainer = styled.div`
  ${props=>props.theme.media.greaterThan('md')`
    margin: 0 auto;
    background-color: #ffffff;
    margin-left: -2rem;
    width: 120%;
    box-shadow: ${props.theme.boxShadow.large};
  `}
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  height: 90px;

  ${props=>props.theme.media.lessThan('md')`
    display: none;
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  flex: 2;
  height: 100%;

  &:first-of-type {
    border-right: 1px solid ${props=>props.theme.colors.border};
`;

export const ButtonWrapper = styled.div`
  
`;

export const Button = styled.button`
  border: none;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  font-size: 1rem;
  flex: 1;
  color: white;
  font-weight: 500;
  cursor: pointer;
  background: ${props=>props.theme.colors.primary};
`

export const MobileCtaWrapper = styled.div`
  padding: 0 1rem;

  ${props=>props.theme.media.greaterThan('md')`
    display: none;
  `}
`;
