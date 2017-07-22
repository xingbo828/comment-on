import { injectGlobal } from 'styled-components';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import { textDark } from './Variables';

injectGlobal`
  @font-face {
    font-family: Roboto;
    src: url('${RobotoRegular}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url('${RobotoMedium}') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-size: 16px;
    color: ${textDark};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;