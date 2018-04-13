import styled from 'styled-components';
import { ImgUpload } from '../../../../globalComponents/Form';

export const StyledImgUpload = styled(ImgUpload.SingleImgUpload)`
  width: 180px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 214px;
  margin: 0 auto;
  margin: 0 auto 2rem;
  padding: 1rem;
  border: 1px solid ${props=>props.theme.colors.border};
  border-radius: 99rem;
`;
