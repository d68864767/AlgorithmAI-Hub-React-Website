import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Add global styles here */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }
`;
