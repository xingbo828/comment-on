import styled from 'styled-components';

const getBackColor = props => {
  if (props.disabled) {
    return props.theme.colors.border;
  } else if(props.primary) {
    return props.theme.colors.primary;
  } else if(props.danger) {
    return props.theme.colors.danger;
  }
  return props.theme.colors.secondary;
};

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.colors.border;
  } else if (props.primary) {
    return props.theme.colors.primary;
  } else if(props.danger) {
    return props.theme.colors.danger;
  }
  return props.theme.colors.secondary;
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
    return props.theme.colors.primary;
  } else if(props.danger) {
    return props.theme.colors.danger;
  }
  return props.theme.colors.secondary;
}

const getHoverFontColor = props => {
  if (props.disabled) {
    return '';
  } else if(props.primary) {
    return props.theme.colors.primary;
  } else if(props.danger) {
    return props.theme.colors.danger;
  }
  return props.theme.colors.secondary;
}


const getIconSize = props => {
  if (props.small) {
    return `
      border-radius: 50%;
      width: 15px;
      height: 15px;
      line-height: 15px;
      margin-left: 5px;
      font-size: .7rem;
    `;
  }
  return `
    border-radius: 50%;
    padding: .5rem;
    width: 1rem;
    height: 1rem;
    margin-left: .5rem;
  `;
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
    if(props.loading) {
      contentValue = '\\f021';
    }

    return `
      &:after {
        transition: .3s cubic-bezier(.645,.045,.355,1);
        display: inline-block;
        background: ${getForeColor(props)};
        color: ${getBackColor(props)};
        font-family: FontAwesome;
        content: "${contentValue}";

        ${getIconSize(props)}
        ${props.loading ? `animation: fa-spin 2s infinite linear;` : ''}
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




const getPadding = props => {
  if (props.small) {
    return `
      padding: 5px 5px;
      ${props.theme.media.greaterThan('md')`padding: 5px 10px;`.join('')}
    `;
  }
  return `
    padding: 1rem 0;
    ${props.theme.media.greaterThan('md')`padding: 1rem 2rem;`.join('')}
  `;
}

export const Button = styled.button`
  border-radius: 99em;
  box-sizing: content-box;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  width: 100%;
  ${props=>props.theme.media.greaterThan('md')`
    width: auto;
  `};
  min-width: 80px;
  font-size: 1rem;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  position: relative;
  color: ${getForeColor};
  background-color:  ${getBackColor};
  border-color: ${getBorderColor};
  cursor: ${props => props.disabled || props.loading ? 'not-allowed' : 'pointer'};

  ${getPadding}
  ${getIcon}

  :hover {
    background-color: ${getHoverBackgroundColor};
    color: ${getHoverFontColor};
    border-color: ${getHoverBorderColor};
  }

`;
