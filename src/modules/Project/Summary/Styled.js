import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.tight};
  ${props => {
    if(!props.noBorder) {
      return `border-bottom: 1px solid ${props.theme.colors.border};`;
    }
  }}

  ${props=>props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide};
  `}
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionHeaderEditLink = styled(Link)`
  line-height: 90px;
  color: ${props=>props.theme.colors.secondary};
  text-decoration: none;
  font-weight: ${props=>props.theme.fontWeights.roman};
  &:hover {
    text-decoration: underline;
  }
`;

export const SectionBody = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const SectionBodyItem = styled.li`
  ${props=>props.theme.media.greaterThan('sm')`
    display: flex;
    justify-content: space-between;
  `}

  padding: ${props=>props.theme.spaces.tight} 0;
`;

export const SectionBodyItemLabel = styled.span`
  display: block;
  margin-bottom: ${props=>props.theme.spaces.tight};
  font-weight: ${props=>props.theme.fontWeights.roman};
`;

export const SectionBodyItemContent = styled.span`
  display: block;
`;

export const SectionInvalid = styled.div`
  color: ${props=>props.theme.colors.danger};
`;



export const SummaryBody = styled.main`
  ${props=>props.theme.media.greaterThan('md')`
    max-width: 1200px;
    margin:0 auto;
  `}
`;

export const HeadingWrapper = styled.div `
  text-align: center;
  flex: 1;
  margin-bottom: ${prop=>prop.theme.spaces.base};
  ${props=> props.theme.media.greaterThan('md')`
    text-align: left;
    background-color: ${prop=>prop.theme.colors.offWhite};
    padding: ${prop=>prop.theme.spaces.xWide} 0;
  `};
`;
