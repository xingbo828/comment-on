/* eslint-disable */
import { injectGlobal } from 'styled-components';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoBlack from './fonts/Roboto-Black.ttf';
import { textDark } from './Variables';
import { media, offWhite } from './Variables';

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
    color: ${textDark};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    background: ${offWhite};

    ${media.fromMedium`
      background: white;
    `}
  }
`;
