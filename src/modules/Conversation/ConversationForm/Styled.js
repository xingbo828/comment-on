import styled from 'styled-components';

export const FormContainer = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div {
    flex-basis: 75%;
    margin: 0;
    padding: 0;
  }
  > button {
    flex-basis: 20%;
  }
`;
