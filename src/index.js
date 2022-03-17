import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/big-shoulders-display"

const theme = extendTheme({
  fonts: {
    body: "Big Shoulders Display"
  }
})

ReactDOM.render(
  <ChakraProvider theme={theme} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
