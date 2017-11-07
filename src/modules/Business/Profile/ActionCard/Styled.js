import Styled from 'styled-components';

export const Aside = Styled.aside`
  flex: 1 100%;
  order: 1;

  ${props=>props.theme.media.greaterThan('md')`
    margin: -4rem 0 0;
    order: 2;
    flex: 4;
    margin-left: 2.75%;
  `}
`;

export const CtaContainer = Styled.div`
  transform: none;
  text-align: center;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  ${props=>props.theme.media.greaterThan('md')`
    position: static;
    height: 0;
  `}
`;
