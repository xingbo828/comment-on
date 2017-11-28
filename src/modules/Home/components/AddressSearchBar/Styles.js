import styled from 'styled-components';

export const AddressSearchBarContainer = styled.div`
  ${props=>props.theme.media.greaterThan('md')`
    margin: 0 auto;
    width: 900px;
    height: 100px;
    border-radius: 100px;
    background-color: #ffffff;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
    margin-top: -50px;
  `}
  margin-top: 1rem;
`;

export const Form = styled.form`
  ${props=>props.theme.media.lessThan('md')`
    display: none;
  `}
`;


export const InputWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MobileCtaWrapper = styled.div`
  padding: 0 1rem;
  ${props=>props.theme.media.greaterThan('md')`
    display: none;
  `}
`;
