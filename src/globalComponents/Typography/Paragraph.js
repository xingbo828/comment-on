import Styled from 'styled-components';

const Paragraph = Styled.p`
  line-height: 1.5;
  margin: .5rem 0 1.5rem;

  ${props => props.light && `
    color: ${props.theme.colors.textLight}
  `}
`;

export default Paragraph;