import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: transLateY(-3.5rem);
  }

  to {
    opacity: 1;
    transform: transLateY(-4.5rem);
  }
`;


export const HeadingContainer = styled.header`
  text-align: center;
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.xWide};
    background-color: #fcfcfc;
    text-align: left;
  `}

   h1 {
    font-size: 2.5rem;
  }
`

export const HeadingContainerInner = styled.div`
  ${props=>props.theme.media.greaterThan('md')`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props=>props.theme.spaces.wide};
  `}

`;

export const SummaryBody = styled.main`
  ${props=>props.theme.media.greaterThan('md')`
    display: flex;
    max-width: 1200px;
    margin:0 auto;
    flex-direction: row-reverse;
  `}
`;

export const SummaryReportContainer = styled.section`
  ${props=>props.theme.media.greaterThan('md')`
    flex:3;
  `}
`;

export const SummaryActionFormContainer = styled.aside`
  ${props=>props.theme.media.greaterThan('md')`
    margin-left: ${props=>props.theme.spaces.xWide};
    flex:2;
    height: fit-content;
    animation: ${fadeIn} .6s ease-in-out 1;
    animation-fill-mode: forwards;
  `}
`;
