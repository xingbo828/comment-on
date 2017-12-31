import styled from 'styled-components';

export const ManagementHeaderContainer = styled.div`
  display: flex;
  font-size: .875rem;
  flex-direction: column-reverse;

  padding: ${props=>props.theme.spaces.base} 0;
  ${props=> props.theme.media.greaterThan('md')`
    padding: ${props=>props.theme.spaces.wide} 0;
    flex-direction: row;
  `};
`;

export const HeaderAddressesContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  ${props=> props.theme.media.greaterThan('md')`
    flex-direction: row;
  `};
`;

export const HeaderAddress = styled.div`
  flex: 1;
`;

export const HeaderAddressContent = styled.div`
  position: relative;
  padding: ${props=>props.theme.spaces.tight} 0 ${props=>props.theme.spaces.tight} 1.5rem;
  ${props=> props.theme.media.greaterThan('md')`
    padding:  0;
  `};
  ${props=> props.theme.media.lessThan('md')`
    &:before {
      width: 15px;
      font-size: 1rem;
      color: ${props.theme.colors.textLight};
      text-align: center;
      font-family: 'FontAwesome';
      content: '\f10c';
      position: absolute;
      left: 0;
    }
  `};
`;

export const HeaderDeliverAddressContent = HeaderAddressContent.extend`
  ${props=> props.theme.media.lessThan('md')`
    &:before {
      content: '\f041';
    }
  `};
`;


export const HeaderStatus = styled.div`
  flex: 1;
  display: none;
  ${props=> props.theme.media.greaterThan('md')`
    flex-direction: column;
    display: flex;
    align-items: flex-end;
  `};
`;

export const HeaderStatusContent = styled.div`
  color: ${props=>props.theme.colors.primary};
  font-weight: ${props=>props.theme.fontWeights.medium};
`;


export const HeaderLabel = styled.label`
  display: none;

  ${props=> props.theme.media.greaterThan('md')`
    display: block;
    font-weight: ${props=>props.theme.fontWeights.roman};
    font-size: .875rem;
    padding: ${props=>props.theme.spaces.tight} 0;
  `};
`;
