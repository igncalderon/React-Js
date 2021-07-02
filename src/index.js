import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes  from './Routes'
import { CartContextProvider } from './contexts/cartContext'
ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
    <Routes />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
