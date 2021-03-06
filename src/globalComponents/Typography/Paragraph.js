import Styled from 'styled-components';

const Paragraph = Styled.p`
  font-size: 17px;  
  line-height: 1.75;
  margin: 0;
  ${props=>props.centered && `text-align: center;`}
  ${props=>props.xl && `font-size: 1.25rem;`}
  ${props=>props.large && `font-size: 1.125rem;`}
  ${props=>props.small && `font-size: .875rem;`}

  ${props => props.light && `
    color: ${props.theme.colors.textLight};
  `}

  ${props => props.color && `
    color: ${props.color};
  `}
`;

export default Paragraph;