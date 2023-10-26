import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  ul, p {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
  }

  body {
    height: 100%; 
    width: 100%;
    background: linear-gradient(149deg, rgba(24, 187, 156, 1) 0%, rgba(106, 57, 175, 1) 42%, rgba(187, 24, 148, 1) 72%, rgba(115, 53, 134, 1) 100%);
    background-attachment: fixed; 
    animation: gradient 15s infinite linear;
    background-size: 250%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @keyframes gradient {
    0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .flag-dropdown {
    height: 55px;
  }
`;

export default GlobalStyle;
