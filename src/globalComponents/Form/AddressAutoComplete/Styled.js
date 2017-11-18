import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';

export const Label = styled.label`
  display: inline-block;
  width: 100%;
`;

export const FocusBorder = styled.div`
height: 2px;
width: 100%;
background: ${props=>props.theme.colors.primary};
margin-top: -3px;
transition: .3s;
margin-left: 20px;
${props => {
  if(props.focused) {
    return `
      transform: scale(1);
    `;
  }
  return `transform: scale(0);`;
}}
`;

export const IconContainer = styled.span`
  width: 20px;
  display: inline-block;
  text-align: center;
  color: ${props=>props.theme.colors.textLight};
`;


export const GeosuggestStyled = styled(Geosuggest)`
  position: relative;
  line-height: 40px;
  padding-left: 10px;
  display: inline-block;
  width: calc(100% - 20px);
  text-align: left;
  .geosuggest__input {
    outline: 0;
    font-size: 1.2rem;
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    border: solid ${props=>props.theme.colors.border};
    border-width: 0 0 1px 0;
    color: ${props => props.theme.colors.textDark};
  }

  .geosuggest__input:focus {
  }

  .geosuggest__suggests {
    z-index: ${props => props.theme.zIndex.dropdown};
    position: absolute;
    top: 100%;
    left: -1px;
    right: -1px;
    padding: 0;
    margin-top: -1px;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.border};
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
  }

  .geosuggest__suggests--hidden {
    display: none;
  }

  .geosuggest__item {
    font-size: 18px;
    font-size: .9rem;
    padding: 1rem .5rem;
    cursor: pointer;
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: ${props => props.theme.colors.primary};
    color: #fff;
  }
  .geosuggest__item--active {
    background: ${props => props.theme.colors.primary};
    color: #fff;
  }
  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    background: #ccc;
  }
  .geosuggest__item__matched-text {
    font-weight: bold;
  }
`;
