import normalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import * as fonts from '../constants/fonts';

export default () =>
  injectGlobal`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0; padding: 0;
  }

  body {
    font-family: ${fonts.serifFont};
  }
`;
