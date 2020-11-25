import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route';
import registerServiceWorker from './registerServiceWorker';
import './global.css'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Routes /> 
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

