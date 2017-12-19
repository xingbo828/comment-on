import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: transLateY(-2.5rem);
  }

  to {
    opacity: 1;
    transform: transLateY(-3.5rem);
  }
`;


export const HeadingContainer = styled.header`
  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.xWide};
    background-color: #fcfcfc;
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
    height: 600px;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.07);
    animation: ${fadeIn} .6s ease-in-out 1;
    animation-fill-mode: forwards;
  `}
`;
