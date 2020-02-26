import { createGlobalStyle } from 'styled-components';
import * as Colors from './Colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:500,700,900&display=swap');  

  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    height: 100vh;
    width: 100%;
  }

  #app {
    background-color: ${Colors.BACKGROUND};
    min-height: 100vh;    
  }

  h3 {
    color: ${Colors.GREY_1};
    font-size: 48px;
    font-weight: 900;
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
