import styled from 'styled-components';
import media from '../../../foundation/mediaQueries';

const getBackColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if(props.primary) {
    return props.theme.colors.primaryAction;
  } else if(props.danger) {
    return props.theme.colors.dangerAction;
  }
  return props.theme.colors.secondaryAction;
};

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.colors.borderPrimary;
  } else if (props.primary) {
    return props.theme.colors.primaryAction;
  } else if(props.danger) {
    return props.theme.colors.dangerAction;
  }
  return props.theme.colors.secondaryAction;
};

const getForeColor = props => {
  if (props.disabled) {
    return props.theme.colors.offWhite;
  }
  return 'white'
};

const getHoverBackgroundColor = props => {
  if (props.disabled) {
    return '';
  } else if(props.primary) {
    return 'white';
  } else if(props.danger) {
    return 'white';
  }
  return 'white';
}

const getHoverBorderColor = props => {
  if (props.disabled) {
    return '';
  } else if (props.primary) {
    return props.theme.colors.primaryAction;
  } else if(props.danger) {
    return props.theme.colors.dangerAction;
  }
  return props.theme.colors.secondaryAction;
}

const getHoverFontColor = props => {
  if (props.disabled) {
    return '';
  } else if(props.primary) {
    return props.theme.colors.primaryAction;
  } else if(props.danger) {
    return props.theme.colors.dangerAction;
  }
  return props.theme.colors.secondaryAction;
}

const getIcon = props => {
  if (props.icon) {
    let contentValue;
    switch (props.icon) {
      case 'arrow-right':
          contentValue = '\\f061';
        break;
      case 'plus':
          contentValue = '\\f067';
      break;
      default:
        return null
    }

    return `
      &:after {
        transition: .3s cubic-bezier(.645,.045,.355,1);
        display: inline-block;
        background: ${getForeColor(props)};
        color: ${getBackColor(props)};
        font-family: FontAwesome;
        content: "${contentValue}";
        border-radius: 99em;
        padding: .5rem;
        width: 1rem;
        height: 1rem;
        transform: translateX(1rem);
      }
      :hover {
        &:after {
          background: ${!props.disabled && getBackColor(props)};
          color: ${!props.disabled && getForeColor(props)};
      }
    `
  }

  return null;
}

export const Button = styled.button`
  border-radius: 99em;
  box-sizing: content-box;
  display: inline-block;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 1rem 2rem;
  min-width: 80px;
  font-size: 1rem;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  position: relative;
  color: ${getForeColor};
  background-color:  ${getBackColor};
  border-color: ${getBorderColor};
  padding: ${props => props.small ? '5px 10px' : '16px 32px'};
  ${media.greaterThan('md')`
    width: auto;
  `}

  ${getIcon}

  :hover {
    background-color: ${getHoverBackgroundColor};
    color: ${getHoverFontColor};
    border-color: ${getHoverBorderColor};
  }

`;
