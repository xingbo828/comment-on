import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 0 1rem;
  padding: 0.5rem 0;
`;
export const StyledSubContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const StyledInput = styled.span`
  display: none;
`;


export const InputLabel = styled.label`
  font-size: 1.5rem;
`;

export const StyledImgList = styled.ul`
  padding: 0;
  display: flex;
  margin: 0;
`;
export const StyledImgListItem = styled.li`
  list-style: none;
  flex: 1;
  position: relative;
  margin-right: 1rem;
`;

export const StyleImgReplace = styled.div`
opacity: 0;
width: 100px;
height: 100px;
position: absolute;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
::after {
  font-family: FontAwesome;
  content: '\f093';
  font-size: 2.0rem;
  color: ${props => props.theme.buttonPrimary};
}
:hover {
  background-color: rgba(0,0,0,.6);
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
  ::after {
    font-family: FontAwesome;
    content: '\f1f8';
    font-size: 2.0rem;
    color: ${props => props.theme.colors.buttonPrimary};
  }
  :hover {
    background-color: rgba(0,0,0,.6);
    opacity: .7;
  }

  transition: opacity 0.3s;
`;

export const StyleImg = styled.img`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid lightgrey;
  padding: 5px;
  border-radius: 5px;
`;

export const StyledUpLoadBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.colors.offWhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: ${props => props.theme.colors.borderPrimary};
    border: 1px dashed ${props => props.theme.colors.textDark};
  }
  :focus {
    outline: 0;
  }
`;
