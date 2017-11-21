import styled from 'styled-components';

export const Container = styled.div``;

export const StyledSelect = styled.select`
    height: 32px;
    appearance: none;
    outline: 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.26);
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-position: right center;
    cursor: pointer;
    color: rgba(0,0,0,.87);
    font-size: 1rem;
    padding: 0 25px 0 15px;

    &:focus {
      outline: 0;
      height: 33px;
      margin-bottom: -1px;
      border-color: ${props=>props.theme.colors.primary};
      border-width: 2px;
    }

    &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
    }
`;

export const Label = styled.label`
  display: inline-block;
  padding-left: ${props=>props.theme.spaces.base};
  white-space: nowrap;
  cursor: pointer;
  margin-right: 1rem;
  line-height: 32px;
`;
