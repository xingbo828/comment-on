import styled from 'styled-components';

export const AddressSearchBarContainer = styled.div`
  background-color: white;
  margin: 0;
  box-shadow: rgba(29,29,31,0.15) 0 -160px 60px;

  ${props=>props.theme.media.greaterThan('md')`
    margin: 0 0 0 -2rem;
    width: 130%;
    border-radius: 4px;
    box-shadow: ${props=>props.theme.boxShadow.large};

  `}
`;

export const Form = styled.form`
  padding: 1.5rem;  
  align-items: center;
  display: flex;
  flex-flow: column;

  ${props=>props.theme.media.greaterThan('md')`
    flex-flow: row;
    height: 90px;
    padding: 0;  
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 100%;
  margin: 0 0 2rem;
  width: 100%;
  box-shadow: 0 -1px 0 ${props=>props.theme.colors.border} inset;

  ${props=>props.theme.media.greaterThan('md')`
    margin: 0;
    flex-flow: row;
    height: 90px;
    padding: 0 2rem;
    height: 100%;
    flex: 2;
    width: auto;
    box-shadow: none;

    &:first-of-type {
      border-right: 1px solid ${props=>props.theme.colors.border};
    }
  `}
`;

export const ButtonWrapper = styled.div`
  
`;

export const Button = styled.button`
  border: none;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  transition: background .3s;
  flex: 1;
  color: white;
  font-weight: 500;
  cursor: pointer;
  background: ${props=>props.theme.colors.primary};
  padding: 1.5rem 0;
  border-radius: 99rem;
  width: 100%;
  white-space: nowrap;
  box-shadow: ${props=>props.theme.boxShadow.small};

  &:hover {
    background: ${props=>props.theme.colors.primaryDark};
  }

  ${props=>props.theme.media.greaterThan('md')`
    padding: 0 2rem;
    border-radius: 0;
    box-shadow: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`
