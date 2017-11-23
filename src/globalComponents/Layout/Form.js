import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  padding-bottom: ${props=>props.theme.spaces.tight};
  overflow: hidden;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.07);
  width: 100%;
  margin: 0 auto;
  ${props=>props.theme.media.greaterThan('md')`
    width: calc(1000%/12);
    padding-bottom: 160px;
  `}
`;

const FormActions = styled.div`
  width: 100%;
  padding: ${props=>props.theme.spaces.tight};
  > button:not(:last-child) {
    margin-bottom: ${props=>props.theme.spaces.wide};
  }
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.xWide} 0;
    border-top: 1px solid #e3e3e3;
    position: absolute;
    bottom: 0;
    height:130px;
    > button:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const FormInner = styled.div`
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.tight};
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.xWide} 0 ;
  `}
`;

export default {
  Form,
  FormActions,
  FormInner
};
