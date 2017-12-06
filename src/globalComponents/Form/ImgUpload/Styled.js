import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledInput = styled.span`
  display: none;
`;


export const StyledImgList = styled.ul`
  padding: 0;
  display: flex;
  margin: 0;
  flex-wrap: wrap;
`;
export const StyledImgListItem = styled.li`
  list-style: none;
  flex: 1;
  position: relative;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const StyleImgReplace = styled.div`
  opacity: 0;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  position: absolute;
  cursor: pointer;
  display: flex;
  border-radius: ${props=>props.shape=== 'circle' ? '50%' : '5px'};
  align-items: center;
  justify-content: center;
  ::after {
    font-family: FontAwesome;
    content: '\f093';
    font-size: 2.0rem;
    color: ${props => props.theme.colors.primary};
  }
  :hover {
    background-color: rgba(0,0,0,.5);
    opacity: .7;
  }

  transition: opacity 0.3s;
`;

export const StyledImgRemove = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props=>props.shape=== 'circle' ? '50%' : '5px'};
  ::after {
    font-family: FontAwesome;
    content: '\f1f8';
    font-size: 2.0rem;
    color: ${props => props.theme.colors.danger};
  }
  :hover {
    background-color: rgba(0,0,0,.6);
    opacity: .7;
  }

  transition: opacity 0.3s;
`;

export const StyleImg = styled.div`
  box-sizing: border-box;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  border-radius: ${props=>props.shape=== 'circle' ? '50%' : '5px'};
  background-color: rgba(0,0,0,.1);
  line-height: ${props=>props.size}px;
  ${props => {
    if(props.shape === 'square') {
      return `
        box-shadow: inset 0 0 1px 0 ${props.theme.colors.textDark};
      `;
    }
  }}
  text-align: center;
  overflow: hidden;
  > img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
`;

export const StyledUpLoadBtn = styled.button`
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  border: 1px dashed ${props => props.theme.colors.border};
  border-radius: ${props=>props.shape=== 'circle' ? '50%' : '5px'};
  background-color: transparent;
  cursor: pointer;
  font-weight: ${props=>props.theme.fontWeights.roman};
  font-size: 1rem;
  color: ${props=>props.theme.colors.textLight};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
  :focus {
    outline: 0;
  }
`;
