import Styled from 'styled-components';

const HeadingContainer = Styled.div`
  padding: 6rem 0 4rem;
  background-color: ${prop=>prop.theme.colors.offWhite};
`

const ProfileContentContainer = Styled.div`
  display: flex;
  justify-content: space-between;

  ${props=>props.theme.media.lessThan('md')`
    flex-direction: column;
  `}
`;

const CommentContainer = Styled.div`
  margin: 2rem 0;
`;

const Content = Styled.div`
  flex: 1 100%;
  order: 2;

  ${props=>props.theme.media.greaterThan('md')`
    order: 1;
    flex: 8;
    margin-right: 2.75%;
  `}
`;


export {
  HeadingContainer,
  ProfileContentContainer,
  Content,
  CommentContainer
}
