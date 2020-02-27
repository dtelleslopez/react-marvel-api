import { createGlobalStyle } from 'styled-components';
import * as Colors from './Colors';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${Colors.BACKGROUND};   
    margin: 0;
  }

  h3, h4, h5, p {
    margin: 0;
  }

  h3 {
    color: ${Colors.GREY_1};
    font-size: 48px;
    font-weight: 900;
    line-height: 56px;
    margin-bottom: 36px;
  }

  h4 {
    color: ${Colors.GREY_1};
    font-size: 36px;
    font-weight: 700;
  }

  h5 {
    color: ${Colors.GREY_2};
    font-size: 24px;
    font-weight: 700;
  }

  p {
    color: ${Colors.GREY_2};
    font-size: 18px;
    font-weight: 500;
  }
`;
