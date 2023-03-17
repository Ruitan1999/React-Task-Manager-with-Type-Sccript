import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {makeServer} from './Server/server'

const server = makeServer()
console.log(server) 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

