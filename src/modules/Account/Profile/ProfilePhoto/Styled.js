import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  > div > div {
    box-shadow: 0 5px 5px 0px ${props=>props.theme.colors.border};
  }
`;
