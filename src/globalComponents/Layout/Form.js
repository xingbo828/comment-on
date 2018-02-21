import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  border-radius: 8px;
  background-color: white;
  box-shadow: ${props=>props.theme.boxShadow.large};
  width: 100%;
  margin: 0 auto 4rem;
  flex-direction: column;

  ${props=>props.theme.media.greaterThan('md')`
    max-width: 768px;
    margin: 0 auto 6rem;
  `}
`;

const FormActions = styled.div`
  width: 100%;
  overflow: hidden;
  padding: ${props=>props.theme.spaces.base};
  border-top: 1px solid #e3e3e3;

  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.xWide} 0;
    bottom: 0;
    height:130px;
    
    > button:not(:last-child) {
      margin-bottom: 0;
    }
  `}

  > button:not(:last-child) {
    margin-bottom: ${props=>props.theme.spaces.wide};
  }
`;

const FormInner = styled.div`
  padding: 1rem;

  ${props=>props.theme.media.greaterThan('md')`
    padding: 2rem;
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
