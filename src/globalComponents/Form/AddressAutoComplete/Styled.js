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
margin-top: -2px;
transition: .3s;
${props => {
  if(props.focused) {
    return `
      transform: scale(1);
    `;
  }
  return `transform: scale(0);`;
}}
`;


export const GeosuggestStyled = styled(Geosuggest)`
  position: relative;
  padding-left: 30px;
  line-height: 40px;

  &::before {
    font-family: 'FontAwesome';
    content: '\f041';
    font-size: 1.2rem;
    position: absolute;
    top:0;
    left: 10px;
    line-height: 40px;
  }

  text-align: left;
  .geosuggest__input {
    outline: none;
    font-size: 1.2rem;
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    border: 0;
    color: ${props => props.theme.colors.textDark};


  }

  .geosuggest__input:focus {
  }

  .geosuggest__suggests {
    position: absolute;
    top: 100%;
    left: -1px;
    right: -1px;
    padding: 0;
    margin-top: -1px;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.borderPrimary};
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
    background: ${props => props.theme.colors.primaryAction};
    color: #fff;
  }
  .geosuggest__item--active {
    background: ${props => props.theme.colors.primaryAction};
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
