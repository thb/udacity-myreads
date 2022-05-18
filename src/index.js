import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

registerServiceWorker()
