import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 1rem;
`;

export const RadioGroupLabel = styled.label`
  font-size: 1.5rem;
  font-weight: ${props=>props.theme.fontWeights.medium};
`;

export const RadioList = styled.div`
  ${props => () => {if(props.childType === 'wild') {
    return `
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      `
  }}}
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  outline: none;

`;


export const StyledLabel = styled.label`
  display: inline-block;
  padding: .5rem 0;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 1rem;
  line-height: 23px;
`;

export const StyledRadio = styled.input`
  opacity: 0;
  position: absolute;
  height: 20px;
  width: 20px;
  z-index: 1;
  cursor: pointer;
`;

export const StyledRadioReplacementContainer = styled.div`
  display: flex;
`;

export const StyledRadioReplacement = styled.span`
  border-color: ${props => () => {
    if(props.checked) {
      return props.color || props.theme.colors.border;
    }
    return props.theme.colors.border;
  }};
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 23px;
  height: 23px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  background-color: #fff;
  transition: all .3s;
  margin-right: 1rem;

  ::after {
    position: absolute;
    width: 11px;
    height: 11px;
    left: 5px;
    top: 5px;
    border-radius: 50%;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: ${props => props.color ? props.color : props.theme.colors.primary};
    opacity: ${props => props.checked ? '1' : '0' };
    transform: scale(${props => props.checked ? '1.2' : '0' });
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  }
`;
