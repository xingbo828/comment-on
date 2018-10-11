/* eslint-disable */
import { injectGlobal } from 'styled-components';
import SourceSansProLight from './fonts/SourceSansPro-Light.ttf';
import SourceSansProRegular from './fonts/SourceSansPro-Regular.ttf';
import SourceSansProMedium from './fonts/SourceSansPro-SemiBold.ttf';
import SourceSansProBold from './fonts/SourceSansPro-Bold.ttf';
import SourceSansProBlack from './fonts/SourceSansPro-Black.ttf';
import variables from './variables';

injectGlobal`

  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProLight}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProRegular}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProMedium}') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProBold}') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: SourceSansPro;
    src: url('${SourceSansProBlack}') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  body {
    font-size: 16px;
    overflow-x: hidden;
    color: ${variables.colors.textDark};
    padding: 0;
    margin: 0;
    font-family: 'SourceSansPro', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    
    * {
      box-sizing: border-box;
    }
  }
`;
