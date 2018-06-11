import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: block;
  padding: 0;
  margin: 0 0 3rem;
`;


export const InputErrorMsg = styled.div`
  padding: 1rem 0 0;
  font-size: .75rem;
  letter-spacing: .05em;
  font-weight: 400;
  color: ${props => props.theme.colors.danger};
`;


const renderSize = (props) => {
  if(props.size === 'default') {
    return `
      height: 29px;
      min-width: 64px;
      line-height: 26px;
      ::after {
        width: 25px;
        height: 25px;
        top: 1px;
      }
    `;
  } else {
    return `
      height: 20px;
      min-width: 44px;
      line-height: 20px;
      ::after {
        width: 18px;
        height: 18px;
        top: 0;
      }
    `;
  }
}

const renderChecked = (props) => {
  if(props.checked) {
    return `
      background-color: ${props.theme.colors.primary};
      ::after {
        left: 100%;
        margin-left: ${props.size === 'default' ? '-25px' : ' -19px'};
      }
    `;
  }
  return `
    background-color: rgba(0,0,0,.25);
    ::after {
      left: ${props.size==='default' ? '1px' : '1px'};
    }
  `;
};

export const SwitchWrapper = styled.div`
  padding: 2rem 0 1.5rem;
`;


export const SwitchContainer = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  ${renderSize}
  ${renderChecked}
  vertical-align: middle;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .3s;
  user-select: none;
  :focus {
    box-shadow: 0 0 0 2px rgba(90,173,94,.2);
    outline: 0;
  }

  ::after {
    position: absolute;
    border-radius: 100%;
    background-color: ${props=>props.theme.colors.offWhite};
    content: " ";
    cursor: pointer;
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  }
`;

