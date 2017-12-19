import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: white;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${props=>props.theme.media.greaterThan('md')`
    justify-content: center;
  `}


  > div {
    flex-basis: 75%;
    ${props=>props.theme.media.greaterThan('md')`
      flex-basis: 60%;
    `}
    margin: 0;
    padding: 0;

  }
  > button {
    flex-basis: 20%;
    ${props=>props.theme.media.greaterThan('md')`
      flex-basis: 8%;
    `}
  }
`;
