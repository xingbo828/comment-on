import styled from 'styled-components';
import {
  media
} from '../../foundation/Variables';


const getBackgroundColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if(props.primary) {
    return props.theme.primaryColor;
  }
  return 'white';
};

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.borderPrimary;
  } else if(props.primary) {
    return props.theme.primaryColor;
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
  display: inline-block;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.2;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 4px;
  height: 40px;
  user-select: none;
  width: 100%;
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
    color: ${props => props.disabled ? '' : props.theme.primaryColor};
    border-color: ${props => props.disabled ? '' : props.theme.primaryColor};
  }

  disabled {

  }
`;

export default Button;
