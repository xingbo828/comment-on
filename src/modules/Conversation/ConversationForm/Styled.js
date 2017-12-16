import styled from 'styled-components';

export const FormContainer = styled.form`
  position: absolute;
  bottom: 0;
  padding: ${props=>props.theme.spaces.tight};
  width: 100%;
  height: 100px;
  border-top: 1px solid ${props=>props.theme.colors.border};
`;
