import React from 'react';
import ReactDOM from 'react-dom/client';
import 'typeface-roboto';
import './styles/index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
