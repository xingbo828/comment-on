import styled from 'styled-components';
import {
  media
} from '../../foundation/Variables';


const getBackgroundColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if(props.primary) {
    return props.theme.primaryActionColor;
  }
  return 'white';
};

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if (props.primary) {
    return props.theme.primaryActionColor;
  }
  return 'white';
};

const getFontColor = props => {
  if (props.disabled) {
    return props.theme.offWhite;
  } else if(props.primary) {
    return 'white';
  }
  return 'rgba(0,0,0,.65)';
};

const Button = styled.button`
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
  border-radius: 2px;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  position: relative;
  color: ${getFontColor};
  background-color:  ${getBackgroundColor};
  border-color: ${getBorderColor};

  ${media.fromMedium`
    width: auto;
  `}

  :hover {
    background-color: ${props => props.disabled ? '' : 'white'};
    color: ${props => props.disabled ? '' : props.theme.primaryActionColor};
    border-color: ${props => props.disabled ? '' : props.theme.primaryActionColor};
  }

  disabled {

  }
`;

export default Button;
