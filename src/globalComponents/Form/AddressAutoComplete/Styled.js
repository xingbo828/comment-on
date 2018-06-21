import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  padding: 0;
  width: 100%;
  transition: border-color .3s;

  ${props=>props.bordered && `
    border-radius: 4px;
    border: 1px solid ${props.theme.colors.border};
  `}

  ${props=>(props.filled || props.focused) && `
    border-color: white;
  `}
`;

export const FocusBorder = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: ${props=>props.theme.colors.border};
  margin-top: -2px;
  transition: .3s;
  transform: scaleX(0);
  transform-origin: 0;
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 17px;
  z-index: 1;
  display: block;
  font-size: 1.125rem;
  letter-spacing: .05em;
  line-height: 1.5;
  transition: .3s;
  color: ${props=>props.theme.colors.textLight};
  transform: scale(1);
  transform-origin: top left;
  white-space: nowrap;

  ${props=>props.bordered && `
    left: 1rem;
  `}

  ${props=>props.focused &&`
    color: ${props.theme.colors.primary};
  `}

  ${props=>(props.filled || props.focused) && `
    left: 0;
    text-transform: uppercase;
    transform: scale(.65);
    top: 0;

    ~ span {
      transform: scaleX(1);
    }
  `}

  ${props=>(props.focused) && `
    ~ span {
      background: ${props.theme.colors.primary} !important;
    }
  `}
`;

export const GeosuggestStyled = styled(Geosuggest)`
  position: relative;
  line-height: 1.5;
  display: inline-block;
  width: 100%;
  text-align: left;
  
  .geosuggest__input {
    width: 100%;
    position: relative;
    z-index: 2;
    line-height: 1.5;
    background: none;
    border-radius: 0;
    outline: 0;
    font-size: 1.125rem;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 0;
    border-width:0;
    color: ${props => props.theme.colors.textDark};
  }

  .geosuggest__input:focus {
  }

  .geosuggest__suggests {
    margin: 0;
    padding: 0;
    z-index: ${props => props.theme.zIndex.dropdown};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    box-shadow: ${props => props.theme.boxShadow.large};
  }

  .geosuggest__suggests--hidden {
    display: none;
  }

  .geosuggest__item {
    font-size: .875rem;
    padding: 1em;
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 1em;
      background: ${props => props.theme.colors.border};
    }

    &:hover {
      &:after {
        background: ${props => props.theme.colors.offWhite};
      }
    }
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: ${props => props.theme.colors.offWhite};
  }
  .geosuggest__item--active {
    background: ${props => props.theme.colors.offWhite};
  }
  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    background: #ccc;
  }
  .geosuggest__item__matched-text {
    font-weight: bold;
  }
`;
