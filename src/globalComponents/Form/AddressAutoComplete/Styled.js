import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';

export const GeosuggestStyled = styled(Geosuggest)`
  position: relative;
  margin: 1em auto;
  text-align: left;

  .geosuggest__input {
    outline: none;
    font-size: 1.2rem;
    width: 100%;
    border: 2px solid transparent;
    box-shadow: 0 0 1px ${props => props.theme.borderPrimary};
    padding: .5em 1em;
    transition: border 0.2s, box-shadow 0.2s;
  }

  .geosuggest__input:focus {
    border-color: ${props => props.theme.borderPrimary};
    box-shadow: 0 0 0 transparent;
  }

  .geosuggest__suggests {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 25em;
    padding: 0;
    margin-top: -1px;
    background: #fff;
    border: 2px solid ${props => props.theme.borderPrimary};
    border-top-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    z-index: 5;
    transition: max-height 0.2s, border 0.2s;
  }

  .geosuggest__suggests--hidden {
    display: none;
  }

  .geosuggest__item {
    font-size: 18px;
    font-size: 1rem;
    padding: 1rem .5rem;
    cursor: pointer;
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: #f5f5f5;
  }
  .geosuggest__item--active {
    background: #267dc0;
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
