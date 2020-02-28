import { createGlobalStyle } from 'styled-components';
import * as Colors from './Colors';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', serif;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${Colors.BACKGROUND};   
    height: 100%;
    margin: 0;
  }

  #app {
    height: 100%;
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

    @media only screen and (max-width: 768px) {
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 42px;
      margin-bottom: 30px;
    }
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
