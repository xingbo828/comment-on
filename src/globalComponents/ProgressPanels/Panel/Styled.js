import styled from 'styled-components';


const getHeaderColor = (props) => {
  switch (props.status) {
    case 'finished':
      return props.theme.colors.success;
    case 'inProgress':
      return props.theme.colors.textDark;
    case 'waiting':
      return props.theme.colors.textLight;
    default:
      return props.theme.colors.textLight;
  }
};


export const PanelContainer = styled.li`
  list-style: none;
  background-color: ${props=>props.status === 'waiting' ? props.theme.colors.offWhite : 'white'};
`;

export const PanelHeader = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  padding: ${props=>props.theme.spaces.wide};
  ${props=>props.theme.media.greaterThan('md')`
    padding: 2.5rem ${props=>props.theme.spaces.xWide};
  `}
`;

export const PanelHeaderTitleDeco = styled.span`
  padding-right: ${props=>props.theme.spaces.base};
`;

export const PanelHeaderTitle = styled.span`
  text-transform: uppercase;
  font-weight: ${props=>props.theme.fontWeights.medium};
  letter-spacing: 1px;
  color: ${getHeaderColor}
`;

export const PanelHeaderTertiaryText = styled.span`
  color: ${props=>props.theme.colors.textLight};
`;

export const PanelBody = styled.div`
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.wide};
  ${props=>props.theme.media.greaterThan('md')`
      padding: ${props=>props.theme.spaces.wide} ${props=>props.theme.spaces.xWide};
  `}
`;
