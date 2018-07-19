import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  background: ${props=>props.theme.colors.offWhite};
  margin: 0 0 1rem;
  text-decoration: none;

  ${props => {
    if(!props.noBorder) {
      // return `border-bottom: 1px solid ${props.theme.colors.border};`;
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
  ${'' /* line-height: 90px; */}
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
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${props=>props.theme.spaces.tight} 0;
  ${props=>props.border && `border-bottom: 1px solid ${props.theme.colors.border}`};
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
