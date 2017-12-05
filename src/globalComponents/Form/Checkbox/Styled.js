import styled from 'styled-components';

export const Container = styled.div`
  border: solid ${props => props.theme.colors.border};
  border-width: 0 0 1px 0;
  margin: 0 0 1rem;
`;


export const InputErrorMsg = styled.span`
  color: red;
`;

export const CheckboxGroupLabel = styled.label`
  font-size: 1.2rem;
`;

export const CheckboxList = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  outline: none;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  padding: ${props=>props.theme.spaces.tight} ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.tight} 0;
  cursor: pointer;
  line-height: 20px;
`;

export const CheckboxLabel = styled.span`
  padding-left: ${props=>props.theme.spaces.tight};

`;
export const CheckboxWrapper = styled.span`
  position: relative;
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  width: 20px;
  height: 20px;
`;
export const CheckboxInner = styled.span`
  top: 0;
  left: 0;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.checked ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: 2px;
  transition: all .3s;
  ${props => {
    if(props.disabled){
      return `
        background-color: ${props.theme.colors.border};
      `;
    } else if (props.checked) {
      return `
        background-color: ${props.theme.colors.primary};
      `;
    } else {
      return `
        background-color: white;
      `;
    }
  }}
  ::after {
    position: absolute;
    content: "";
    left: 6px;
    top: 1px;
    width: 6px;
    height: 11px;
    ${props => {
      if(props.checked){
        return `
          border: solid #fff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        `;
      }
    }}
  }
`;

