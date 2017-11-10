import styled from 'styled-components';

const renderSize = (props) => {
  if(props.size === 'default') {
    return `
      height: 22px;
      min-width: 44px;
      line-height: 20px;
      ::after {
        width: 18px;
        height: 18px;
        top: 1px;
      }
    `;
  } else {
    return `
      height: 14px;
      min-width: 28px;
      line-height: 12px;
      ::after {
        width: 12px;
        height: 12px;
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
        margin-left: ${props.size === 'default' ? '-19px' : ' -12.5px'};
      }
    `;
  }
  return `
    background-color: rgba(0,0,0,.25);
    ::after {
      left: ${props.size==='default' ? '1px' : '.5px'};
    }
  `;
};


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
    border-radius: 18px;
    background-color: ${props=>props.theme.colors.offWhite};
    content: " ";
    cursor: pointer;
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
  }
`;

