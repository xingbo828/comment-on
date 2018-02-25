import Styled from 'styled-components';

const Paragraph = Styled.p`
  line-height: 1.5;

  ${props => props.light && `
    color: ${props.theme.colors.textLight}
  `}
`;

export default Paragraph;