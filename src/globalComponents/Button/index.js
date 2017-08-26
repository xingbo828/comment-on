import Styled from 'styled-components';

Button = styled.a`
  padding: 1rem 2rem;
  color: white;
  font-size: 1rem;
  border-radius: 99rem;
  background: ${({theme}) => theme.primaryActionColor };
`;

export default Button;