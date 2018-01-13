import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';

export const SelectMoverList = styled.div`
  padding-bottom: ${props=> props.theme.spaces.base};
`;

export const SelectMoverListHeading = styled.div`
  display: none;
  ${props=> props.theme.media.greaterThan('sm')`
    display: flex;
    list-style: none;
    font-size: .875rem;
    font-weight: ${props=>props.theme.fontWeights.roman};
    padding: 0 ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.wide};
  `};
`;

export const SelectMoverListHeadingName = styled.div`
  flex: 6;
`;

export const SelectMoverListHeadingEst = styled.div`
  flex: 1;
`;

export const SelectMoverListHeadingAction = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;

`;


export const SelectMoverListItem = styled.label`
  list-style: none;
  display: flex;
  border-top: 1px dashed ${props=>props.theme.colors.border};
  flex-direction: column;
  padding: ${props=>props.theme.spaces.base};
  transition: .3s;
  width: 100%;
  border: ${props=>props.checked ? `1px solid ${props.theme.colors.primary}` : `1px solid ${props.theme.colors.border}`};
  border-radius: 3px;
  margin-bottom: ${props=>props.theme.spaces.tight};

  ${props=> props.theme.media.greaterThan('sm')`
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    padding: ${props=>props.theme.spaces.wide};

  `};
`;

export const SelectMoverListItemName = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  color: ${props=>props.checked ? props.theme.colors.primary : props.theme.colors.textDark};
  font-weight: ${props=>props.theme.fontWeights.roman};
  ${props=> props.theme.media.greaterThan('sm')`
    flex: 6;
    padding: 0;
  `};

`;

export const SelectMoverListItemEst = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  &:before {
    content: 'Estimate: ';
  }
  ${props=> props.theme.media.greaterThan('sm')`
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

export const RadioContainer = styled.div`
  display: none;
  ${props=> props.theme.media.greaterThan('sm')`
    display: flex;
    flex: 1;
  `};
`;

export const SelectMoverListItemAction = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    margin: ${props=>props.theme.spaces.tight} 0;
  }
  ${props=> props.theme.media.greaterThan('sm')`
    padding: 0;
    flex: 3;
    justify-content: flex-end;
    > * {
      margin: 0 0 0 ${props=>props.theme.spaces.wide};
    }
  `};
`;

export const SelectMoverFormAction = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: ${props=>props.theme.spaces.base};
`;



