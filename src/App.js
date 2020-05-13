import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  deepRed: '#7A072A',
  grey: '#707070',
  cardTextColor: '#808080',
  white: '#FFFFFE',
  blackGrey: '#34373C',
};

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/static/Roboto-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  html {
    background: ${theme.deepRed};
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
    font-family: 'Roboto', sans-serif;
    background: ${theme.deepRed};
    
  }
  a {
    text-decoration: none;
  }
`

function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    
  );
}

export default App;
