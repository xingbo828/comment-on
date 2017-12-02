import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';

export const Label = styled.label`
  display: inline-block;
  width: 100%;
`;

export const FocusBorder = styled.div`
height: 2px;
display: block;
padding-left: 10px;
background: ${props=>props.theme.colors.primary};
margin-top: -4px;
transition: .3s;
margin-left: 30px;
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
  color: #8a8a8a;
`;


export const GeosuggestStyled = styled(Geosuggest)`
  position: relative;
  line-height: 40px;
  padding-left: 10px;
  display: inline-block;
  width: calc(100% - 20px);
  text-align: left;
  .geosuggest__input {
    border-radius: 0;
    outline: 0;
    font-size: .875rem;
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    border: solid ${props=>props.theme.colors.border};
    border-width: 0 0 1px 0;
    color: ${props => props.theme.colors.textDark};

    ${props=>props.theme.media.greaterThan('md')`
      font-size: 1rem;
    `}
  }

  .geosuggest__input:focus {
  }

  .geosuggest__suggests {
    z-index: ${props => props.theme.zIndex.dropdown};
    position: absolute;
    top: 100%;
    left: 10px;
    right: 0px;
    padding: 0;
    margin-top: -5px;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    box-shadow: 0 25px 32px 0 rgba(0,0,0,0.25);
  }

  .geosuggest__suggests--hidden {
    display: none;
  }

  .geosuggest__item {
    font-size: .825rem;
    ${props=>props.theme.media.greaterThan('md')`
      font-size: 1rem;
    `}
    padding: ${props => props.theme.spaces.xTight};
    ${props=>props.theme.media.greaterThan('md')`
      padding: ${props.theme.spaces.tight};
    `}
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
