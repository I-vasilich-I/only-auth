import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('./assets/fonts/HelveticaNeueCyr-Bold.eot');
    src: local('HelveticaNeueCyr-Bold'),
        url('./assets/fonts/HelveticaNeueCyr-Bold.eot?#iefix') format('embedded-opentype')
        url('./assets/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),
        url('./assets/fonts/HelveticaNeueCyr-Bold.woff') format('woff'),
        url('./assets/fonts/HelveticaNeueCyr-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue';
    src: url('./assets/fonts/HelveticaNeueCyr-Medium.eot');
    src: local('HelveticaNeueCyr-Medium'),
        url('./assets/fonts/HelveticaNeueCyr-Medium.eot?#iefix') format('embedded-opentype')
        url('./assets/fonts/HelveticaNeueCyr-Medium.woff2') format('woff2'),
        url('./assets/fonts/HelveticaNeueCyr-Medium.woff') format('woff'),
        url('./assets/fonts/HelveticaNeueCyr-Medium.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }


  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    font-family: 'Helvetica Neue', sans-serif;
    color: #1F1F1F;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  main, section {
    width: 100%;
  }

  main {
    padding-inline: 20px;
  }
`;

export default GlobalStyle;