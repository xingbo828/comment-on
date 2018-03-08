import styled from 'styled-components';

const getBackgroundColor = props => {
  if (props.disabled) {
    return props.theme.colors.border;
  } else if(props.primary) {
    return props.theme.colors.primary;
  } else if(props.danger) {
    return props.theme.colors.danger;
  } else if(props.success) {
    return props.theme.colors.success;
  }
  return props.theme.colors.secondary;
};


const getForeColor = props => {
  if (props.disabled) {
    return props.theme.colors.offWhite;
  }
  return 'white'
};

const getIconColor = props => {

  if (props.primary) {
    return props => props.theme.colors.primaryLight
  }

  return props => props.theme.colors.secondary
}

const getHoverBackgroundColor = props => {

  if (props.ghost) {
    return props.theme.colors.offWhite
  }
  
  if (props.disabled) {
    return '';
  }

  if (props.primary) {
    return props.theme.colors.primaryDark
  }
   
  if (props.danger || props.success) {
    return 'white';
  }

  return props.theme.colors.secondaryDark
}


const getPadding = props => {

  if (props.ghost) {

    if (props.small) {
      return `
        padding: 0.875rem 1.5rem;
        margin: 0 -1.5rem;
      `;
    }

    return `
      padding: 1rem 1.5rem;
      margin:  0 -1.5rem;

      ${props.theme.media.greaterThan('md')`
        padding: 1.5rem 2rem;
        margin: 0 -2rem;
      `.join('')}
    `
  }

  if (props.small) {
    return `
      padding: 0.875rem 1.5rem;
    `;
  }

  return `
    padding: 1rem 1.5rem;

    ${props.theme.media.greaterThan('md')`
      padding: 1.5rem 2rem;
    `.join('')}
  `
}

const getFontSize = props => {
  if (props.small) {
    return '.875rem';
  }
  return '1rem';
}

const getIconMargin = props => {
  if (props.iconPosition === 'iconLeft') {
    return '0 8px 0 0'
  }

  return '0 0 0 8px'
}


export const StyledButton = styled.button`
  border-radius: 99em;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  box-shadow: 
  min-width: 120px;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  color: ${props=> props.ghost || props.outline ? getBackgroundColor(props) : 'white'};
  background-color:  ${props=> props.ghost || props.outline ? 'transparent' : getBackgroundColor(props)};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: ${props=>props.small ? 'auto' : '100%'};
  font-size: ${getFontSize};

  ${getPadding}

  ${props => props.outline && `
    background: none;
    border-color: ${getBackgroundColor(props)};
  `}

  ${props => !props.disabled && !props.ghost && !props.outline && `
    box-shadow: ${props.theme.boxShadow.small};
  `}

  ${props=>props.theme.media.greaterThan('md')`
    width: auto;
  `};

  &:hover {
    background-color: ${getHoverBackgroundColor};
    border-color: ${getHoverBackgroundColor};
  }

  &:active {
    transition: .1s;
    transform: scale(.96);
  }

  > i {
    transition: .3s cubic-bezier(.645,.045,.355,1);
    display: inline-block;
    border-radius: 50%;
    color: ${getIconColor};
    margin: ${getIconMargin};
    font-size: 1em;
  }
`;

