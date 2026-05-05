import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    // background-color: #f5f5f5;
  }
  * {
    box-sizing: border-box;
  }

  .container {
  max-width: 480px;
  margin: 0 auto;
  padding: 50px 0;


  @media screen and (min-width: 768px) {
    width: 768px;
    max-width: 960px;
  }

  @media screen and (min-width: 1200px) {
    max-width: none;
    width: 1200px;
  }
}

`;
