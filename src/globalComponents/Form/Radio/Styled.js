import styled from 'styled-components';
import {
  media
} from '../../../foundation/Variables';

export const Container = styled.div`
  border: solid ${props => props.theme.borderPrimary};
  border-width: 0 0 1px 0;
  margin: 0 0 1rem;
`;

export const RadioGroupLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

export const RadioList = styled.div`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  outline: none;
`;


export const StyledLabel = styled.label`
  display: block;
  padding: .5rem 0;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 1rem;

  ${media.fromMedium`
    display: inline-block;
    padding: auto;
  `}
`;

export const StyledRadio = styled.input`
  opacity: 0;
  position: absolute;
  height: 18px;
  width: 18px;
  z-index: 1;
`;

export const StyledRadioReplacementContainer = styled.div`
  display: flex;
`;

export const StyledRadioReplacement = styled.span`
  border-color: ${props => props.theme.primaryColor};
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.borderPrimary};
  background-color: #fff;
  transition: all .3s;
  margin-right: 5px;
  ::after {
    position: absolute;
    width: 6px;
    height: 6px;
    left: 5px;
    top: 5px;
    border-radius: 4px;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: ${props => props.theme.primaryColor};
    opacity: ${props => props.checked ? '1' : '0' };
    transform: scale(${props => props.checked ? '1.2' : '0' });
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  }
`;
