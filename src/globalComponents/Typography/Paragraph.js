import Styled from 'styled-components';

const Paragraph = Styled.p`
  line-height: 1.75;
  margin: 0;
  ${props=>props.centered && `text-align: center;`}
  ${props=>props.large && `font-size: 1.125rem;`}

  ${props => props.light && `
    color: ${props.theme.colors.textLight}
  `}
`;

export default Paragraph;