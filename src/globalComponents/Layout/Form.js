import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  border-radius: 8px;
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
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 0 ${props=>props.theme.spaces.base};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;

  ${props=>props.theme.media.greaterThan('md')`
    position: static;
    padding: 0 ${props=>props.theme.spaces.xWide};
    bottom: 0;
    height:130px;
    
    > button:not(:last-child) {
      margin-bottom: 0;
    }
  `}

  // > button:not(:last-child) {
  //   margin-bottom: ${props=>props.theme.spaces.wide};
  // }
`;

const FormInner = styled.div`
  padding: 4rem 1rem 0rem;

  ${props=>props.theme.media.greaterThan('md')`
    padding: 6rem 4rem 0rem;
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

const FormFieldSet = styled.div`
  margin: 0 0 6rem;
`

export default {
  Form,
  FormActions,
  FormInner,
  FormHeading,
  FormFieldSet
};
