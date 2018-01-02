import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
export const SelectMoverList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const SelectMoverListHeading = styled.li`
  display: none;
  ${props=> props.theme.media.greaterThan('md')`
    display: flex;
    list-style: none;
    font-size: .875rem;
    font-weight: ${props=>props.theme.fontWeights.roman};
    padding: ${props=>props.theme.spaces.base} 0;
  `};
`;

export const SelectMoverListHeadingName = styled.div`
  flex: 2;
`;

export const SelectMoverListHeadingEst = styled.div`
  flex: 1;
`;

export const SelectMoverListHeadingAction = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;

`;


export const SelectMoverListItem = styled.li`
  list-style: none;
  display: flex;
  border-top: 1px dashed ${props=>props.theme.colors.border};
  flex-direction: column;
  padding: ${props=>props.theme.spaces.base} 0;
  ${props=> props.theme.media.greaterThan('md')`
    flex-direction: row;
    align-items: center;
    padding: ${props=>props.theme.spaces.wide} 0;
  `};

`;

export const SelectMoverListItemName = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  font-weight: ${props=>props.theme.fontWeights.roman};
  ${props=> props.theme.media.greaterThan('md')`
    flex: 2;
    padding: 0;
  `};

`;

export const SelectMoverListItemEst = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  &:before {
    content: 'Estimate: ';
  }
  ${props=> props.theme.media.greaterThan('md')`
    flex: 1;
    padding: 0;
    &:before {
      content: '';
    }
  `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props=>props.theme.colors.secondary};
  font-weight: ${props=>props.theme.fontWeights.roman};
  &:hover {
    text-decoration: underline;
  }
`;

export const SelectMoverListItemAction = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    margin: ${props=>props.theme.spaces.tight} 0;
  }
  ${props=> props.theme.media.greaterThan('md')`
    padding: 0;
    flex: 3;
    justify-content: flex-end;
    > * {
      margin: 0 0 0 ${props=>props.theme.spaces.wide};
    }
  `};
`;


