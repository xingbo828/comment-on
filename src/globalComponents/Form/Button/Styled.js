import styled from 'styled-components';
import {
  media
} from '../../../foundation/Variables';

const getBackgroundColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if(props.primary) {
    return props.theme.primaryActionColor;
  } else if(props.danger) {
    return props.theme.dangerActionColor;
  }
  return props.theme.secondaryActionColor;
};

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if (props.primary) {
    return props.theme.primaryActionColor;
  } else if(props.danger) {
    return props.theme.dangerActionColor;
  }
  return props.theme.secondaryActionColor;
};

const getFontColor = props => {
  if (props.disabled) {
    return props.theme.offWhite;
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
    return props.theme.primaryActionColor;
  } else if(props.danger) {
    return props.theme.dangerActionColor;
  }
  return props.theme.secondaryActionColor;
}

const getHoverFontColor = props => {
  if (props.disabled) {
    return '';
  } else if(props.primary) {
    return props.theme.primaryActionColor;
  } else if(props.danger) {
    return props.theme.dangerActionColor;
  }
  return props.theme.secondaryActionColor;
}

const getIcon = props => {
  if (props.icon) {
    console.log(props.icon);
    let contentValue;
    switch (props.icon) {
      case 'arrow-right':
      console.log('gogog');
          contentValue = '\\f061';
        break;
      case 'plus':
          contentValue = '\\f067';
      break;  
      default:
        return null
    }

    console.log(contentValue);

    return `
      &:after {
        display: inline-block;
        background: white;
        color: ${props.theme.primaryActionColor};
        font-family: FontAwesome;
        content: "${contentValue}";
        border-radius: 99em;
        padding: .5rem;
        transform: translateX(1rem);
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
  color: ${getFontColor};
  background-color:  ${getBackgroundColor};
  border-color: ${getBorderColor};
  padding: ${props => props.small ? '5px 10px' : '16px 32px'};
  ${media.fromMedium`
    width: auto;
  `}

  ${getIcon}

  :hover {
    background-color: ${getHoverBackgroundColor};
    color: ${getHoverFontColor};
    border-color: ${getHoverBorderColor};
  }
`;
