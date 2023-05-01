import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #15616d;
    --neutral-light: #FFFFFF;
    --neutral-medium: #bcb8b1;
    --neutral-dark: #000000;
    --font-family: 'Montserrat', sans-serif;
    --font-size: 16px;
  }

  html {
    font-size: var(--font-size);
    font-family: var(--font-family);
    color: var(--neutral-light);
    background-color: var(--neutral-medium);
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    box-sizing: border-box;
 }
`;