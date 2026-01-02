import React from 'react';
import ReactDOM from 'react-dom/client';
// These two imports are crucial
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- ഈ ലൈൻ വളരെ പ്രധാനമാണ്
import './index.css';
import './App.css';
import App from './App';
import {  HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter>
      <App />
    </HashRouter>

);