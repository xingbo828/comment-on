import styled from 'styled-components';
import Icon from '../../../../globalComponents/Icon';
import { Link } from 'react-router-dom';
export const Wrapper = styled.div`
`;

export const Form = styled.form`
  padding: 1rem 0;
  border-bottom: 2px dashed ${props=>props.theme.colors.darkOffWhite};
  > div {
    margin-bottom: 1.5rem;
    input {
      color: ${props=>props.theme.colors.textDark};
    }
  }

`;

export const OtherServicesWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${props=>props.theme.colors.textLight};
  font-weight: ${props=>props.theme.fontWeights.roman};
`;


export const OtherServicesText = styled.p`
  width: 100%;
  text-align: left;
`;

export const OtherServiceIcon = styled(Icon)`
  margin-right: 1.5rem;
  cursor: pointer;
  font-size: 2.5rem;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionForgotPw = styled(Link)`
  color: ${props => props.theme.colors.primary};
  &:hover {
      color: ${props=>props.theme.colors.secondaryLight};
    }
`;
