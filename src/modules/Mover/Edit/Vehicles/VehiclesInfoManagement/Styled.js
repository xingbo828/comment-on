import styled from 'styled-components';

export const VehOptionContainer = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid ${props=>props.theme.colors.border};
  margin-bottom: 1rem;
`;


export const ParaWrapper = styled.div`
  padding: 1rem 0;
`;


export const InputWrapper = styled.div`
  text-align: center;
`;

export const ImgWrapperInner = styled.div`
  display: inline-block;
  max-width: 300px;
  > img {
    width: 100%;
  }
`;

export const ImgWrapperOutter = styled.div`
  ${props=>props.theme.media.greaterThan('sm')`
    padding: 1rem 0;
  `}
  width: 100%;
  text-align: center;
`;
