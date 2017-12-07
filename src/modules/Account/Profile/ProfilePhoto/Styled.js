import styled from 'styled-components';
import { ImgUpload } from '../../../../globalComponents/Form';

export const StyledImgUpload = styled(ImgUpload.SingleImgUpload)`
  width: 180px;
  margin: 0 auto;
  transform: translateY(-90px);
  > div {
    box-shadow: 0 5px 5px 0px ${props=>props.theme.colors.border};
  }
`;

export const Container = styled.div`
  height: 90px;
`;
