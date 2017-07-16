import { injectGlobal } from 'styled-components';
import RobotoRegular from './fonts/Roboto-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: Roboto;
    src: url('${RobotoRegular}') format('truetype');
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;