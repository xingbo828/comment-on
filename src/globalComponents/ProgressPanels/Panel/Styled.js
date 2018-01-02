import styled, { css } from 'styled-components';


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

const getHeaderPadding = (props) => {
  const mobileStyle = `padding: ${props.theme.spaces.wide};`;
  const desktopStyle = `padding: 2.5rem ${props.theme.spaces.xWide};`;
  const desktopStyleWithMediaquery = props.theme.media.greaterThan('md')`
    ${desktopStyle}
  `;
  const responsiveStyle = css`
    ${mobileStyle}
    ${desktopStyleWithMediaquery}
  `;

  if(props.viewport === 'mobile') {
    return mobileStyle;
  } else if(props.viewport === 'desktop') {
    return desktopStyle;
  }
  return responsiveStyle;
};

const getBodyPadding = (props) => {
  const mobileStyle = `padding: ${props.theme.spaces.base} ${props.theme.spaces.wide};`;
  const desktopStyle = `padding: 0 ${props.theme.spaces.xWide};`;
  const desktopStyleWithMediaquery = props.theme.media.greaterThan('md')`
    ${desktopStyle}
  `;
  const responsiveStyle = css`
    ${mobileStyle}
    ${desktopStyleWithMediaquery}
  `;

  if(props.viewport === 'mobile') {
    return mobileStyle;
  } else if(props.viewport === 'desktop') {
    return desktopStyle;
  }
  return responsiveStyle;
};


export const PanelContainer = styled.li`
  list-style: none;
  background-color: ${props=>props.status === 'waiting' ? props.theme.colors.offWhite : 'white'};
`;

export const PanelHeader = styled.div`
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;

  ${props=> props.theme.media.greaterThan('md')`
    flex-direction: row;
    justify-content: space-between;
  `};
  ${getHeaderPadding}
`;

export const PanelHeaderTitleDeco = styled.span`
  padding-right: ${props=>props.theme.spaces.base};
`;

export const PanelHeaderTitle = styled.span`
  text-transform: uppercase;
  font-weight: ${props=>props.theme.fontWeights.medium};
  letter-spacing: 1px;
  color: ${getHeaderColor};
`;

export const PanelHeaderTertiaryText = styled.span`
  color: ${props=>props.theme.colors.textLight};
  padding: ${props=>props.theme.spaces.tight} 0 0 ${props=>props.theme.spaces.wide};
  ${props=> props.theme.media.greaterThan('md')`
    padding: 0;
  `};
`;

export const PanelBody = styled.div`
  ${getBodyPadding}
`;
