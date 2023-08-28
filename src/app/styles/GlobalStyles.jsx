import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 100%;
    padding: 100px 0;  
    align-items: center;
    background: #131313;
  }

`;
