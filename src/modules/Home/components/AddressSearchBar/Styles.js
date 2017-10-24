import styled from 'styled-components';

export const AddressSearchBarContainer = styled.div`
  ${props=>props.theme.media.greaterThan('lg')`
    margin: 0 auto;
    width: 900px;
    height: 100px;
    border-radius: 100px;
    background-color: #ffffff;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
    margin-top: -50px;
  `}
`;


export const InputWrapper = styled.div`
  line-height: 100px;
`;
