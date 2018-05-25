import styled from 'styled-components';


const getItemAlignment = (size, viewport, value) => {
  if (size === viewport) {
    return `align-items: ${value};`
  }
  return null;
}


export default styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-right: -1rem;
  margin-left: -1rem;

  ${props => `
    ${getItemAlignment(props.middle, 'xs' ,'center')};
  `}

  ${props=>props.theme.media.greaterThan('xs')`
    ${getItemAlignment(props.middle, 'sm' ,'center')};
  `}

  ${props=>props.theme.media.greaterThan('sm')`
    ${getItemAlignment(props.middle, 'md' ,'center')};
  `}

  ${props=>props.theme.media.greaterThan('md')`
    ${getItemAlignment(props.middle, 'lg' ,'center')};
  `}
`;
