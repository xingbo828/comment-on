import Styled from 'styled-components';

const Blockquote = Styled.blockquote`
  padding: 0;
  margin: 0;
  line-height: 1.5;

  ${props => props.quote && `
    &:after,
    &:before {
      content: '"';
    }
  `}

`;

const ContainerDiv = Styled.div`
    position: relative;
`;

const AvatarContainer = Styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

const ContentContainer = Styled.div`
  padding:  1rem 0 0;
`;

const User = Styled.div`
  padding:  0 0 0 calc(40px + 1rem);
`;

const Context = Styled.div`
  line-height: 1.35;
  font-size: .9rem;
  color: ${props => props.theme.colors.textLight}
`;

const NameSpan = Styled.span`
  line-height: 1.35;
  font-weight: bold;
`;

const RatingContainer = Styled.div`
  position: absolute;
  right: 0;
  top: 0;
  line-height: 40px;
`;

export {
  AvatarContainer,
  Blockquote,
  ContainerDiv,
  ContentContainer,
  User,
  Context,
  NameSpan,
  RatingContainer
}