import Styled from 'styled-components';

const WrapperDiv = Styled.div`
  ${props=>props.theme.media.greaterThan('sm')`
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}


`;

const InnerDiv = Styled.div`
  padding: 0 2rem;
  ${props=>props.theme.media.greaterThan('sm')`
    width: 400px;
    border-radius: 3px;
    box-shadow: ${props=>props.theme.boxShadow.large};
    text-align: center;
  `}

`;

const Form = Styled.form`
  padding-bottom: 2rem;
`;



const LogoPlaceholder = Styled.div`
  background: #ececec;
  color: white;
  margin: 0 auto;
  padding: 2rem 3rem;
  display: inline-block;
  margin: 2rem 0 0;
`;

const LogoWrapper = Styled.div`
  margin: 2rem 0 3rem;
  text-align: center;
`

const ActionWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionBackLink = Styled.a`
  font-size: 1.325rem;
  color: ${props => props.theme.colors.primary};
  &:hover {
      color: ${props=>props.theme.colors.secondaryLight};
    }
  i {
    margin-right: .5rem;
  }
`;

export {
    WrapperDiv,
    LogoPlaceholder,
    InnerDiv,
    LogoWrapper,
    ActionWrapper,
    ActionBackLink,
    Form
};
