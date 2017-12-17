/* eslint-disable */
import { injectGlobal } from 'styled-components';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoBlack from './fonts/Roboto-Black.ttf';
import variables from './variables';

injectGlobal`
  @font-face {
    font-family: Roboto;
    src: url('${RobotoRegular}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url('${RobotoMedium}') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url('${RobotoBold}') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url('${RobotoBlack}') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  body {
    font-size: 16px;
    overflow-x: hidden;
    color: ${variables.colors.textDark};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    background: ${variables.colors.offWhite};

    ${variables.media.greaterThan('md')`
      background: white;
    `}
    * {
      box-sizing: border-box;
    }
    ${variables.media.lessThan('md')`
      &.is-locked {
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
    `}
  }
`;
