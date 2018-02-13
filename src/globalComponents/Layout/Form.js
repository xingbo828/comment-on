import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  ${props=>props.theme.media.greaterThan('md')`
    width: calc(1000%/12);
  `}
`;

const FormActions = styled.div`
  width: 100%;
  margin-top: ${props=>props.theme.spaces.base};
  overflow: hidden;
  padding: ${props=>props.theme.spaces.base};
  > button:not(:last-child) {
    margin-bottom: ${props=>props.theme.spaces.wide};
  }
  border-top: 1px solid #e3e3e3;
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.xWide} 0;
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

const FormHeading = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 ${props=>props.theme.spaces.tight} ${props=>props.theme.spaces.base};
  margin: 0 auto;

  ${props=>props.theme.media.greaterThan('md')`
    width: 600px;
    padding-top: ${props=>props.theme.spaces.base};
  `}

  > p {
    color: ${props=>props.theme.colors.textLight};
  }
`;


export default {
  Form,
  FormActions,
  FormInner,
  FormHeading
};
