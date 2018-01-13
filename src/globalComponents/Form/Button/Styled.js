import styled from 'styled-components';

const getBackColor = props => {
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

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.colors.border;
  } else if (props.primary) {
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

const getHoverBackgroundColor = props => {
  if (props.disabled) {
    return '';
  } else if(props.primary || props.danger || props.success) {
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
  } else if(props.success) {
    return props.theme.colors.success;
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
  } else if(props.success) {
    return props.theme.colors.success;
  }
  return props.theme.colors.secondary;
}


const getIconSize = props => {
  if (props.small) {
    return `
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: .9rem;
    `;
  }
  return `
    padding: .5rem;
    width: 2rem;
    height: 2rem;
  `;
}

const getIconMargin = props => {
  if(props.iconPosition === 'iconLeft') {
    return `margin-right: ${props.theme.spaces.tight};`;
  } else if(props.iconPosition === 'iconRight') {
    return `margin-left: ${props.theme.spaces.tight};`;
  }
}


const getPadding = props => {
  if (props.small) {
    return `
      padding: ${props.theme.spaces.tight} ${props.theme.spaces.base};
    `;
  }
  return `
    padding: 1rem 0;
    ${props.theme.media.greaterThan('md')`padding: 1rem;`.join('')}
  `;
}

export const StyledButton = styled.button`
  border-radius: 99em;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;

  width: ${props=>props.small ? 'auto' : '100%'};
  ${props=>props.theme.media.greaterThan('md')`
    width: auto;
  `};
  min-width: 40px;
  font-size: 1rem;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  ${'' /* position: relative; */}
  color: ${props=>props.ghost ? getBackColor(props) : getForeColor(props)};
  background-color:  ${props=> props.ghost ? 'transparent' : getBackColor(props)};
  border-color: ${props=>props.ghost ? getBackColor(props) : getBorderColor(props)};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  ${getPadding}
  > i {
      transition: .3s cubic-bezier(.645,.045,.355,1);
      display: inline-block;
      border-radius: 50%;
      ${getIconMargin}
      color: ${props=>getBackColor(props)};
      background: ${props=>props.ghost ? 'transparent' : getForeColor(props)};
      ${getIconSize}
    }
  &:hover {
    background-color: ${props=>props.ghost ? 'transparent' : getHoverBackgroundColor(props)};
    color: ${getHoverFontColor};
    border-color: ${getHoverBorderColor};
    > i {
      color: ${props=>props.disabled ? getBackColor(props) : getForeColor(props)};
      background: ${props=> props.disabled ? getForeColor(props) : getBackColor(props)};
    }
  }
  &:active {
    transition: .1s;
    transform: translateY(3px);
  }
`;

