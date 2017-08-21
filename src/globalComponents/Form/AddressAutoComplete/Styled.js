import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.borderPrimary};
`;

export const LabelTxt = styled.span`
  padding: .5rem;
  ::before {
    font-family: 'FontAwesome';
    content: '\f041';
    padding-right: 10px;
  }
`;

export const GeosuggestStyled = styled(Geosuggest)`
  position: relative;
  text-align: left;
  .geosuggest__input {
    outline: none;
    font-size: 1.2rem;
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    border: 0;
    color: ${props => props.theme.textDark};
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
    border: 1px solid ${props => props.theme.borderPrimary};
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
    font-size: 1rem;
    padding: 1rem .5rem;
    cursor: pointer;
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: ${props => props.theme.primaryActionColor};
    color: #fff;
  }
  .geosuggest__item--active {
    background: ${props => props.theme.primaryActionColor};
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
